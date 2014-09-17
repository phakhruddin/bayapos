function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId22 = Ti.UI.createWindow({
        id: "__alloyId22"
    });
    var __alloyId23 = [];
    $.__views.sectionScanner = Ti.UI.createTableViewSection({
        id: "sectionScanner",
        headerTitle: "Scanner"
    });
    __alloyId23.push($.__views.sectionScanner);
    $.__views.row_EAD = Ti.UI.createTableViewRow({
        id: "row_EAD",
        backgroundColor: "white"
    });
    $.__views.sectionScanner.add($.__views.row_EAD);
    $.__views.opt1Switch = Ti.UI.createSwitch({
        value: true,
        id: "opt1Switch",
        right: "10",
        titleOn: "OPTION 1 ON",
        titleOff: "OPTION 1 OFF"
    });
    $.__views.row_EAD.add($.__views.opt1Switch);
    $.__views.opt1_button = Ti.UI.createButton({
        title: "EAN 13 & UPC 12",
        id: "opt1_button",
        left: "50"
    });
    $.__views.row_EAD.add($.__views.opt1_button);
    $.__views.row_EAD = Ti.UI.createTableViewRow({
        id: "row_EAD",
        backgroundColor: "white"
    });
    $.__views.sectionScanner.add($.__views.row_EAD);
    $.__views.opt1Switch = Ti.UI.createSwitch({
        value: true,
        id: "opt1Switch",
        right: "10",
        titleOn: "OPTION 1 ON",
        titleOff: "OPTION 1 OFF"
    });
    $.__views.row_EAD.add($.__views.opt1Switch);
    $.__views.opt1_button = Ti.UI.createButton({
        title: "EAN 8",
        id: "opt1_button",
        left: "50"
    });
    $.__views.row_EAD.add($.__views.opt1_button);
    $.__views.row_EAD = Ti.UI.createTableViewRow({
        id: "row_EAD",
        backgroundColor: "white"
    });
    $.__views.sectionScanner.add($.__views.row_EAD);
    $.__views.opt1Switch = Ti.UI.createSwitch({
        value: true,
        id: "opt1Switch",
        right: "10",
        titleOn: "OPTION 1 ON",
        titleOff: "OPTION 1 OFF"
    });
    $.__views.row_EAD.add($.__views.opt1Switch);
    $.__views.opt1_button = Ti.UI.createButton({
        title: "UPCE",
        id: "opt1_button",
        left: "50"
    });
    $.__views.row_EAD.add($.__views.opt1_button);
    $.__views.row_EAD = Ti.UI.createTableViewRow({
        id: "row_EAD",
        backgroundColor: "white"
    });
    $.__views.sectionScanner.add($.__views.row_EAD);
    $.__views.opt1Switch = Ti.UI.createSwitch({
        value: true,
        id: "opt1Switch",
        right: "10",
        titleOn: "OPTION 1 ON",
        titleOff: "OPTION 1 OFF"
    });
    $.__views.row_EAD.add($.__views.opt1Switch);
    $.__views.opt1_button = Ti.UI.createButton({
        title: "ITF",
        id: "opt1_button",
        left: "50"
    });
    $.__views.row_EAD.add($.__views.opt1_button);
    $.__views.row_EAD = Ti.UI.createTableViewRow({
        id: "row_EAD",
        backgroundColor: "white"
    });
    $.__views.sectionScanner.add($.__views.row_EAD);
    $.__views.opt1Switch = Ti.UI.createSwitch({
        value: true,
        id: "opt1Switch",
        right: "10",
        titleOn: "OPTION 1 ON",
        titleOff: "OPTION 1 OFF"
    });
    $.__views.row_EAD.add($.__views.opt1Switch);
    $.__views.opt1_button = Ti.UI.createButton({
        title: "QR",
        id: "opt1_button",
        left: "50"
    });
    $.__views.row_EAD.add($.__views.opt1_button);
    $.__views.row_EAD = Ti.UI.createTableViewRow({
        id: "row_EAD",
        backgroundColor: "white"
    });
    $.__views.sectionScanner.add($.__views.row_EAD);
    $.__views.opt1Switch = Ti.UI.createSwitch({
        value: true,
        id: "opt1Switch",
        right: "10",
        titleOn: "OPTION 1 ON",
        titleOff: "OPTION 1 OFF"
    });
    $.__views.row_EAD.add($.__views.opt1Switch);
    $.__views.opt1_button = Ti.UI.createButton({
        title: "PDF417",
        id: "opt1_button",
        left: "50"
    });
    $.__views.row_EAD.add($.__views.opt1_button);
    $.__views.row_EAD = Ti.UI.createTableViewRow({
        id: "row_EAD",
        backgroundColor: "white"
    });
    $.__views.sectionScanner.add($.__views.row_EAD);
    $.__views.opt1Switch = Ti.UI.createSwitch({
        value: true,
        id: "opt1Switch",
        right: "10",
        titleOn: "OPTION 1 ON",
        titleOff: "OPTION 1 OFF"
    });
    $.__views.row_EAD.add($.__views.opt1Switch);
    $.__views.opt1_button = Ti.UI.createButton({
        title: "Restrict Scanning Area",
        id: "opt1_button",
        left: "50"
    });
    $.__views.row_EAD.add($.__views.opt1_button);
    $.__views.sectionSocial = Ti.UI.createTableViewSection({
        id: "sectionSocial",
        headerTitle: "Feedback"
    });
    __alloyId23.push($.__views.sectionSocial);
    $.__views.row_FB = Ti.UI.createTableViewRow({
        id: "row_FB",
        backgroundColor: "white"
    });
    $.__views.sectionSocial.add($.__views.row_FB);
    $.__views.opt1Switch = Ti.UI.createSwitch({
        value: true,
        id: "opt1Switch",
        right: "10",
        titleOn: "OPTION 1 ON",
        titleOff: "OPTION 1 OFF"
    });
    $.__views.row_FB.add($.__views.opt1Switch);
    $.__views.opt_fb = Ti.UI.createButton({
        title: "Beep",
        id: "opt_fb",
        left: "50"
    });
    $.__views.row_FB.add($.__views.opt_fb);
    $.__views.row_Twitter = Ti.UI.createTableViewRow({
        id: "row_Twitter",
        backgroundColor: "white"
    });
    $.__views.sectionSocial.add($.__views.row_Twitter);
    $.__views.opt1Switch = Ti.UI.createSwitch({
        value: true,
        id: "opt1Switch",
        right: "10",
        titleOn: "OPTION 1 ON",
        titleOff: "OPTION 1 OFF"
    });
    $.__views.row_Twitter.add($.__views.opt1Switch);
    $.__views.opt_twitter = Ti.UI.createButton({
        title: "Vibrate",
        id: "opt_twitter",
        left: "50"
    });
    $.__views.row_Twitter.add($.__views.opt_twitter);
    $.__views.row_Pinterest = Ti.UI.createTableViewRow({
        id: "row_Pinterest",
        backgroundColor: "white"
    });
    $.__views.sectionSocial.add($.__views.row_Pinterest);
    $.__views.opt1Switch = Ti.UI.createSwitch({
        value: true,
        id: "opt1Switch",
        right: "10",
        titleOn: "OPTION 1 ON",
        titleOff: "OPTION 1 OFF"
    });
    $.__views.row_Pinterest.add($.__views.opt1Switch);
    $.__views.opt_pinterest = Ti.UI.createButton({
        title: "Flash",
        id: "opt_pinterest",
        left: "50"
    });
    $.__views.row_Pinterest.add($.__views.opt_pinterest);
    $.__views.sectionSocial = Ti.UI.createTableViewSection({
        id: "sectionSocial",
        headerTitle: "Social Media"
    });
    __alloyId23.push($.__views.sectionSocial);
    $.__views.row_FB = Ti.UI.createTableViewRow({
        id: "row_FB",
        backgroundColor: "white"
    });
    $.__views.sectionSocial.add($.__views.row_FB);
    $.__views.opt1Switch = Ti.UI.createSwitch({
        value: true,
        id: "opt1Switch",
        right: "10",
        titleOn: "OPTION 1 ON",
        titleOff: "OPTION 1 OFF"
    });
    $.__views.row_FB.add($.__views.opt1Switch);
    $.__views.opt_fb = Ti.UI.createButton({
        title: "Facebook AutoConnect",
        id: "opt_fb",
        left: "50"
    });
    $.__views.row_FB.add($.__views.opt_fb);
    $.__views.row_Twitter = Ti.UI.createTableViewRow({
        id: "row_Twitter",
        backgroundColor: "white"
    });
    $.__views.sectionSocial.add($.__views.row_Twitter);
    $.__views.opt1Switch = Ti.UI.createSwitch({
        value: true,
        id: "opt1Switch",
        right: "10",
        titleOn: "OPTION 1 ON",
        titleOff: "OPTION 1 OFF"
    });
    $.__views.row_Twitter.add($.__views.opt1Switch);
    $.__views.opt_twitter = Ti.UI.createButton({
        title: "Twitter AutoConnect",
        id: "opt_twitter",
        left: "50"
    });
    $.__views.row_Twitter.add($.__views.opt_twitter);
    $.__views.row_Pinterest = Ti.UI.createTableViewRow({
        id: "row_Pinterest",
        backgroundColor: "white"
    });
    $.__views.sectionSocial.add($.__views.row_Pinterest);
    $.__views.opt1Switch = Ti.UI.createSwitch({
        value: true,
        id: "opt1Switch",
        right: "10",
        titleOn: "OPTION 1 ON",
        titleOff: "OPTION 1 OFF"
    });
    $.__views.row_Pinterest.add($.__views.opt1Switch);
    $.__views.opt_pinterest = Ti.UI.createButton({
        title: "Pinterest AutoConnect",
        id: "opt_pinterest",
        left: "50"
    });
    $.__views.row_Pinterest.add($.__views.opt_pinterest);
    $.__views.table_settings = Ti.UI.createTableView({
        data: __alloyId23,
        id: "table_settings",
        backgroundColor: "white"
    });
    $.__views.__alloyId22.add($.__views.table_settings);
    $.__views.settings = Ti.UI.createTab({
        window: $.__views.__alloyId22,
        id: "settings",
        title: "settings",
        icon: "settings.png"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;