function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "scan";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window_scan = Ti.UI.createWindow({
        id: "window_scan"
    });
    $.__views.view_scan = Ti.UI.createView({
        id: "view_scan",
        backgroundColor: "#8C0221"
    });
    $.__views.window_scan.add($.__views.view_scan);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        width: "200",
        height: "85",
        title: "PRESS TO SCAN"
    });
    $.__views.view_scan.add($.__views.button);
    $.__views.scan = Ti.UI.createTab({
        window: $.__views.window_scan,
        id: "scan",
        title: "scan",
        icon: "scan.png"
    });
    $.__views.scan && $.addTopLevelView($.__views.scan);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openMainWindow = function(_tab) {
        console.debug("This is child widow tabViewOneChild.js" + _tab);
        _tab.open($.window_scan);
    };
    var scanditsdk = require("com.mirasense.scanditsdk");
    ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && (Titanium.UI.iPhone.statusBarHidden = true);
    var picker;
    var window = Titanium.UI.createWindow({
        title: "BayaInc Scan",
        navBarHidden: true
    });
    var openScanner = function() {
        picker = scanditsdk.createView({
            width: "100%",
            height: "90%"
        });
        picker.init("mSgNUsRdEeOZbWm+jOzjZhLIbqubo761xvcalwZRQmY", 0);
        picker.showSearchBar(true);
        picker.showToolBar(true);
        picker.setSuccessCallback(function(e) {
            alert("success (" + e.symbology + "): " + e.barcode);
            var now = new Date();
            var f = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, "barcode.txt");
            Titanium.App.Properties.setString("barcode", +e.barcode);
            f.write("barcode is : " + e.barcode + " at " + now + "\n", true);
        });
        picker.setCancelCallback(function() {
            closeScanner();
        });
        window.add(picker);
        window.addEventListener("open", function() {
            "iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname ? picker.setOrientation(Ti.UI.orientation) : picker.setOrientation(window.orientation);
            picker.setSize(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight);
            picker.startScanning();
        });
        window.open();
    };
    var closeScanner = function() {
        if (null != picker) {
            picker.stopScanning();
            window.remove(picker);
        }
        window.close();
    };
    Ti.Gesture.addEventListener("orientationchange", function(e) {
        window.orientationModes = [ Titanium.UI.PORTRAIT, Titanium.UI.UPSIDE_PORTRAIT, Titanium.UI.LANDSCAPE_LEFT, Titanium.UI.LANDSCAPE_RIGHT ];
        if (null != picker) {
            picker.setOrientation(e.orientation);
            picker.setSize(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight);
        }
    });
    $.button.addEventListener("click", function() {
        openScanner();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;