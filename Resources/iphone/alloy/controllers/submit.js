function Controller() {
    function sendEmail() {
        var emailDialog = Ti.UI.createEmailDialog();
        emailDialog.subject = "BayaInc. Sale data";
        emailDialog.toRecipients = [ "phakhruddin@gmail.com" ];
        emailDialog.messageBody = "Sale data is attached !";
        var fcsv = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, "sale.csv");
        var ftxt = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, "sale.txt");
        var f = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, "barcode.txt");
        emailDialog.addAttachment(ftxt);
        emailDialog.addAttachment(fcsv);
        emailDialog.addAttachment(f);
        emailDialog.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "submit";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId24 = Ti.UI.createWindow({
        id: "__alloyId24"
    });
    $.__views.sendemail = Ti.UI.createButton({
        id: "sendemail",
        title: "Send Email"
    });
    $.__views.__alloyId24.add($.__views.sendemail);
    $.__views.tab_submit = Ti.UI.createTab({
        window: $.__views.__alloyId24,
        id: "tab_submit",
        title: "email",
        icon: "phone_email.png"
    });
    $.__views.tab_submit && $.addTopLevelView($.__views.tab_submit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.sendemail.addEventListener("click", function() {
        sendEmail();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;