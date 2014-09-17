function Controller() {
    function sendEmail() {
        var sid = "1J0HGpursjzDKNKbjcutA8vY974D8u7dK32264aL3ARY";
        var thefile = "gss" + sid + ".txt";
        var emailDialog = Ti.UI.createEmailDialog();
        emailDialog.subject = "Bayinc. Raw Data";
        emailDialog.toRecipients = [ "phakhruddin@gmail.com" ];
        emailDialog.messageBody = "This is raw data";
        var rtxt = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, thefile);
        emailDialog.addAttachment(rtxt);
        emailDialog.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "history";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("data");
    $.__views.__alloyId10 = Ti.UI.createWindow({
        id: "__alloyId10"
    });
    var __alloyId11 = [];
    $.__views.row_loaddata = Ti.UI.createTableViewRow({
        id: "row_loaddata",
        backgroundColor: "white"
    });
    __alloyId11.push($.__views.row_loaddata);
    $.__views.label_loaddata = Ti.UI.createLabel({
        text: "Load New xSaction Data",
        id: "label_loaddata",
        color: "orange",
        top: "5",
        left: "20"
    });
    $.__views.row_loaddata.add($.__views.label_loaddata);
    $.__views.row_emaildata = Ti.UI.createTableViewRow({
        id: "row_emaildata",
        backgroundColor: "white"
    });
    __alloyId11.push($.__views.row_emaildata);
    $.__views.label_emaildata = Ti.UI.createLabel({
        text: "Email Loaded Data",
        id: "label_emaildata",
        color: "orange",
        top: "5",
        left: "20"
    });
    $.__views.row_emaildata.add($.__views.label_emaildata);
    $.__views.row_displaydata = Ti.UI.createTableViewRow({
        id: "row_displaydata",
        backgroundColor: "white"
    });
    __alloyId11.push($.__views.row_displaydata);
    $.__views.label_displaydata = Ti.UI.createLabel({
        text: "Click to Display xSaction Data >",
        id: "label_displaydata",
        color: "orange",
        top: "5",
        left: "20"
    });
    $.__views.row_displaydata.add($.__views.label_displaydata);
    $.__views.row_test = Ti.UI.createTableViewRow({
        id: "row_test",
        backgroundColor: "white"
    });
    __alloyId11.push($.__views.row_test);
    $.__views.label_test = Ti.UI.createLabel({
        text: "Click to Test Search >",
        id: "label_test",
        color: "orange",
        top: "5",
        left: "20"
    });
    $.__views.row_test.add($.__views.label_test);
    $.__views.table_history = Ti.UI.createTableView({
        data: __alloyId11,
        id: "table_history",
        backgroundColor: "white"
    });
    $.__views.__alloyId10.add($.__views.table_history);
    $.__views.history = Ti.UI.createTab({
        window: $.__views.__alloyId10,
        id: "history",
        title: "history",
        icon: "history.png"
    });
    $.__views.history && $.addTopLevelView($.__views.history);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.label_loaddata.addEventListener("click", function() {
        Alloy.Globals.getGeneralData();
    });
    $.label_emaildata.addEventListener("click", function() {
        sendEmail();
    });
    $.row_displaydata.addEventListener("click", function() {
        var tabViewDisplayDataController = Alloy.createController("displaydata");
        tabViewDisplayDataController.openMainWindow($.history);
    });
    $.row_test.addEventListener("click", function() {
        var tabViewDisplayDataController = Alloy.createController("test");
        tabViewDisplayDataController.openMainWindow($.history);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;