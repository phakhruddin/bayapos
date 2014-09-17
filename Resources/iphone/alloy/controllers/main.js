function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window_main = Ti.UI.createWindow({
        id: "window_main",
        title: "Baya PointOfSale"
    });
    var __alloyId21 = [];
    $.__views.row_price = Ti.UI.createTableViewRow({
        id: "row_price",
        Title: "PRICE",
        backgroundColor: "white"
    });
    __alloyId21.push($.__views.row_price);
    $.__views.price_tf = Ti.UI.createTextField({
        height: 40,
        top: 50,
        width: 250,
        keyboardType: Titanium.UI.KEYBOARD_DECIMAL_PAD,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "PRICE e.g. 350",
        id: "price_tf"
    });
    $.__views.row_price.add($.__views.price_tf);
    $.__views.save_price_button = Ti.UI.createButton({
        title: "Save",
        height: Ti.UI.SIZE,
        width: 80,
        top: 20,
        id: "save_price_button"
    });
    $.__views.row_price.add($.__views.save_price_button);
    $.__views.row_qty = Ti.UI.createTableViewRow({
        id: "row_qty",
        Title: "QTY",
        backgroundColor: "white"
    });
    __alloyId21.push($.__views.row_qty);
    $.__views.qty_tf = Ti.UI.createTextField({
        height: 40,
        top: 50,
        width: 250,
        keyboardType: Titanium.UI.KEYBOARD_DECIMAL_PAD,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "QTY",
        id: "qty_tf"
    });
    $.__views.row_qty.add($.__views.qty_tf);
    $.__views.save_qty_button = Ti.UI.createButton({
        title: "Save",
        height: Ti.UI.SIZE,
        width: 80,
        top: 20,
        id: "save_qty_button"
    });
    $.__views.row_qty.add($.__views.save_qty_button);
    $.__views.row_item = Ti.UI.createTableViewRow({
        id: "row_item",
        Title: "Item Name",
        backgroundColor: "white"
    });
    __alloyId21.push($.__views.row_item);
    $.__views.item_tf = Ti.UI.createTextField({
        height: 40,
        top: 50,
        width: 250,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Hanami",
        id: "item_tf"
    });
    $.__views.row_item.add($.__views.item_tf);
    $.__views.save_item_button = Ti.UI.createButton({
        title: "Save",
        height: Ti.UI.SIZE,
        width: 80,
        top: 20,
        id: "save_item_button"
    });
    $.__views.row_item.add($.__views.save_item_button);
    $.__views.row_name = Ti.UI.createTableViewRow({
        id: "row_name",
        Title: "Customer Name",
        backgroundColor: "white"
    });
    __alloyId21.push($.__views.row_name);
    $.__views.name_tf = Ti.UI.createTextField({
        height: 40,
        top: 50,
        width: 250,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Customer e.g. Kasma Ahmad",
        id: "name_tf"
    });
    $.__views.row_name.add($.__views.name_tf);
    $.__views.save_name_button = Ti.UI.createButton({
        title: "Save",
        height: Ti.UI.SIZE,
        width: 80,
        top: 20,
        id: "save_name_button"
    });
    $.__views.row_name.add($.__views.save_name_button);
    $.__views.row_paid = Ti.UI.createTableViewRow({
        id: "row_paid",
        Title: "Paid",
        backgroundColor: "white"
    });
    __alloyId21.push($.__views.row_paid);
    $.__views.paid_tf = Ti.UI.createTextField({
        height: 40,
        top: 50,
        width: 250,
        keyboardType: Titanium.UI.KEYBOARD_DECIMAL_PAD,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Paid. e.g. 0",
        id: "paid_tf"
    });
    $.__views.row_paid.add($.__views.paid_tf);
    $.__views.save_paid_button = Ti.UI.createButton({
        title: "Save",
        height: Ti.UI.SIZE,
        width: 80,
        top: 20,
        id: "save_paid_button"
    });
    $.__views.row_paid.add($.__views.save_paid_button);
    $.__views.row_scan = Ti.UI.createTableViewRow({
        id: "row_scan",
        backgroundColor: "white"
    });
    __alloyId21.push($.__views.row_scan);
    $.__views.label_scan = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "orange",
        text: "Press to Scan Item >",
        id: "label_scan",
        top: "5",
        left: "20"
    });
    $.__views.row_scan.add($.__views.label_scan);
    $.__views.row_picture = Ti.UI.createTableViewRow({
        id: "row_picture",
        backgroundColor: "white"
    });
    __alloyId21.push($.__views.row_picture);
    $.__views.label_picture = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "gray",
        text: "Press to Take Picture >",
        id: "label_picture",
        top: "5",
        left: "20"
    });
    $.__views.row_picture.add($.__views.label_picture);
    $.__views.row_done = Ti.UI.createTableViewRow({
        id: "row_done",
        backgroundColor: "white"
    });
    __alloyId21.push($.__views.row_done);
    $.__views.label_done = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FF69B4",
        title: "Done & Save",
        font: {
            fontSize: "30dp"
        },
        text: "Done, Save & Next",
        id: "label_done",
        top: "5",
        left: "20"
    });
    $.__views.row_done.add($.__views.label_done);
    $.__views.table_main = Ti.UI.createTableView({
        backgroundColor: "white",
        data: __alloyId21,
        id: "table_main"
    });
    $.__views.window_main.add($.__views.table_main);
    $.__views.tab_main = Ti.UI.createTab({
        font: {
            fontSize: "50dp",
            fontWeight: "bold",
            textStyle: Ti.UI.TEXT_STYLE_HEADLINE
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "red",
        window: $.__views.window_main,
        id: "tab_main",
        title: "main",
        icon: "KS_nav_ui.png"
    });
    $.__views.tab_main && $.addTopLevelView($.__views.tab_main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    console.log("JSON main :" + JSON.stringify(args));
    Titanium.App.Properties.setInt("barcode", 0);
    $.save_price_button.addEventListener("click", function() {
        $.price_tf.blur();
        var price = $.price_tf.value;
        Titanium.App.Properties.setInt("price", price);
        $.save_price_button.hide();
    });
    $.save_qty_button.addEventListener("click", function() {
        $.qty_tf.blur();
        var qty = $.qty_tf.value;
        Titanium.App.Properties.setInt("qty", qty);
        $.save_qty_button.hide();
    });
    $.save_item_button.addEventListener("click", function() {
        $.item_tf.blur();
        var item = $.item_tf.value;
        Titanium.App.Properties.setString("item", item);
        Titanium.App.Properties.setInt("barcode", 0);
        $.save_item_button.hide();
    });
    $.save_name_button.addEventListener("click", function() {
        $.name_tf.blur();
        var name = $.name_tf.value;
        Titanium.App.Properties.setString("name", name);
        $.save_name_button.hide();
    });
    $.save_paid_button.addEventListener("click", function() {
        $.paid_tf.blur();
        var paid = $.paid_tf.value;
        Titanium.App.Properties.setInt("paid", paid);
        $.save_paid_button.hide();
    });
    $.label_done.addEventListener("click", function() {
        var now = new Date();
        Titanium.App.Properties.getString("barcode") || "Not Scanned";
        var price = Titanium.App.Properties.getInt("price", price);
        var qty = Titanium.App.Properties.getInt("qty", qty);
        var item = Titanium.App.Properties.getString("item", item);
        var name = Titanium.App.Properties.getString("name", name);
        var paid = Titanium.App.Properties.getInt("paid", paid);
        alert("On " + now + " : sold " + qty + " unit(s) of " + item + " at RM" + price + " to " + name + ". RM" + paid + " was paid. Barcode is " + Titanium.App.Properties.getString("barcode") + " . Do not forget to say thanks! Alhamdulillah.");
        var fcsv = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, "sale.csv");
        var ftxt = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, "sale.txt");
        fcsv.write(now + " , " + item + " , " + qty + " , " + price + " , " + name + " , " + paid + " , " + Titanium.App.Properties.getString("barcode") + "\n", true);
        ftxt.write(now + " , " + item + " , " + qty + " , " + price + " , " + name + " , " + paid + " , " + Titanium.App.Properties.getString("barcode") + "\n", true);
    });
    $.name_tf.addEventListener("focus", function() {
        $.save_name_button.show();
    });
    $.qty_tf.addEventListener("focus", function() {
        $.save_qty_button.show();
    });
    $.item_tf.addEventListener("focus", function() {
        $.save_item_button.show();
    });
    $.price_tf.addEventListener("focus", function() {
        $.save_price_button.show();
    });
    $.paid_tf.addEventListener("focus", function() {
        $.save_paid_button.show();
    });
    $.label_scan.addEventListener("click", function() {
        var tabViewScanController = Alloy.createController("scan");
        tabViewScanController.openMainWindow($.tab_main);
    });
    $.table_main.addEventListener("click", function() {
        $.name_tf.blur();
        $.qty_tf.blur();
        $.item_tf.blur();
        $.price_tf.blur();
        $.paid_tf.blur();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;