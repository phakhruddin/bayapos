function Controller() {
    function __alloyId7(e) {
        if (e && e.fromAdapter) return;
        __alloyId7.opts || {};
        var models = __alloyId6.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId2 = models[i];
            __alloyId2.__transform = transformFunction(__alloyId2);
            var __alloyId3 = Ti.UI.createTableViewRow({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                font: {
                    fontSize: "1",
                    fontStyle: "normal"
                },
                color: "#FCFCFC",
                title: "undefined" != typeof __alloyId2.__transform["custom"] ? __alloyId2.__transform["custom"] : __alloyId2.get("custom")
            });
            rows.push(__alloyId3);
            var __alloyId5 = Ti.UI.createLabel({
                color: "gray",
                text: "undefined" != typeof __alloyId2.__transform["custom"] ? __alloyId2.__transform["custom"] : __alloyId2.get("custom")
            });
            __alloyId3.add(__alloyId5);
        }
        $.__views.table_displaydata.setData(rows);
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        console.log("transform is :" + JSON.stringify(transform));
        transform.custom = ">> On " + transform.col1 + " , sold : " + transform.col2;
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "displaydata";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("data");
    $.__views.window_displaydata = Ti.UI.createWindow({
        id: "window_displaydata"
    });
    $.__views.window_displaydata && $.addTopLevelView($.__views.window_displaydata);
    $.__views.search_history = Ti.UI.createSearchBar({
        id: "search_history",
        height: "43"
    });
    $.__views.table_displaydata = Ti.UI.createTableView({
        search: $.__views.search_history,
        id: "table_displaydata",
        backgroundColor: "white",
        filterAttribute: "title"
    });
    $.__views.window_displaydata.add($.__views.table_displaydata);
    var __alloyId6 = Alloy.Collections["data"] || data;
    __alloyId6.on("fetch destroy change add remove reset", __alloyId7);
    exports.destroy = function() {
        __alloyId6.off("fetch destroy change add remove reset", __alloyId7);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    exports.openMainWindow = function(_tab) {
        console.debug("This is child widow tabViewOneChild.js" + _tab);
        _tab.open($.window_displaydata);
        $.table_displaydata.search = $.search_history;
        Alloy.Collections.data.fetch();
    };
    $.table_displaydata.addEventListener("click", function(e) {
        console.log("json stringify e : " + JSON.stringify(e));
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;