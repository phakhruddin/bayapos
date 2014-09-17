function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "test";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window_test = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "window_test",
        title: "Sections & Rows"
    });
    $.__views.window_test && $.addTopLevelView($.__views.window_test);
    $.__views.search_test = Ti.UI.createSearchBar({
        height: "43dp",
        top: 0,
        barColor: "#444",
        showCancel: true,
        id: "search_test"
    });
    var __alloyId25 = [];
    $.__views.__alloyId28 = Ti.UI.createView({
        backgroundColor: "#a00",
        height: "50dp",
        id: "__alloyId28"
    });
    $.__views.__alloyId30 = Ti.UI.createView({
        backgroundColor: "#0a0",
        height: "50dp",
        id: "__alloyId30"
    });
    $.__views.__alloyId26 = Ti.UI.createTableViewSection({
        headerView: $.__views.__alloyId28,
        footerView: $.__views.__alloyId30,
        id: "__alloyId26"
    });
    __alloyId25.push($.__views.__alloyId26);
    $.__views.__alloyId31 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 1",
        id: "__alloyId31"
    });
    $.__views.__alloyId26.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 2",
        id: "__alloyId32"
    });
    $.__views.__alloyId26.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 3",
        id: "__alloyId33"
    });
    $.__views.__alloyId26.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Title Text 1",
        id: "__alloyId34"
    });
    $.__views.__alloyId26.add($.__views.__alloyId34);
    $.__views.label_1 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        id: "label_1",
        text: "Text 1"
    });
    $.__views.__alloyId34.add($.__views.label_1);
    $.__views.__alloyId35 = Ti.UI.createTableViewSection({
        headerTitle: "Section 2",
        id: "__alloyId35"
    });
    __alloyId25.push($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 1",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 2",
        id: "__alloyId37"
    });
    $.__views.__alloyId35.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 3",
        id: "__alloyId38"
    });
    $.__views.__alloyId35.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        height: "50dp",
        text: "Text 2",
        id: "__alloyId39"
    });
    $.__views.__alloyId35.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createTableViewSection({
        headerTitle: "Section 3",
        id: "__alloyId40"
    });
    __alloyId25.push($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 1",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 2",
        id: "__alloyId42"
    });
    $.__views.__alloyId40.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createTableViewRow({
        height: "50dp",
        title: "Row 3",
        id: "__alloyId43"
    });
    $.__views.__alloyId40.add($.__views.__alloyId43);
    $.__views.table_test = Ti.UI.createTableView({
        data: __alloyId25,
        search: $.__views.search_test,
        id: "table_test",
        filterAttribute: "title"
    });
    $.__views.window_test.add($.__views.table_test);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    exports.openMainWindow = function(_tab) {
        console.debug("This is child widow tabViewOneChild.js" + _tab);
        _tab.open($.window_test);
    };
    $.table_test.addEventListener("click", function(e) {
        console.log("Json table_test e : " + JSON.stringify(e));
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;