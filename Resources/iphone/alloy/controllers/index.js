function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("data");
    var __alloyId14 = [];
    $.__views.__alloyId15 = Alloy.createController("main", {
        id: "__alloyId15"
    });
    __alloyId14.push($.__views.__alloyId15.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId16 = Alloy.createController("scan", {
        id: "__alloyId16"
    });
    __alloyId14.push($.__views.__alloyId16.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId17 = Alloy.createController("submit", {
        id: "__alloyId17"
    });
    __alloyId14.push($.__views.__alloyId17.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId19 = Alloy.createController("history", {
        id: "__alloyId19"
    });
    __alloyId14.push($.__views.__alloyId19.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId20 = Alloy.createController("settings", {
        id: "__alloyId20"
    });
    __alloyId14.push($.__views.__alloyId20.getViewEx({
        recurse: true
    }));
    $.__views.tabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId14,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    console.log("JSON index" + JSON.stringify(args));
    $.tabGroup.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;