exports.definition = {
    config: {
        columns: {
            col1: "text",
            col2: "text",
            col3: "text",
            col4: "text",
            col5: "text",
            col6: "text",
            col7: "text",
            col8: "text",
            col9: "text",
            col10: "text",
            col11: "text",
            col12: "text",
            col13: "text",
            col14: "text",
            col15: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "data"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            deleteAll: function() {
                var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger("sync");
            },
            deleteLOC: function(loc) {
                var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name + ' WHERE location="' + loc + '"';
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger("sync");
            },
            saveAll: function() {
                var collection = this;
                var dbName = collection.config.adapter.db_name;
                var table = collection.config.adapter.collection_name;
                var columns = collection.config.columns;
                db = Ti.Database.open(dbName);
                db.execute("BEGIN;");
                collection.each(function(model) {
                    if (!model.id) {
                        model.id = guid();
                        model.attributes[model.idAttribute] = model.id;
                    }
                    var names = [], values = [], q = [];
                    for (var k in columns) {
                        names.push(k);
                        values.push(model.get(k));
                        q.push("?");
                    }
                    var sqlInsert = "INSERT INTO " + table + " (" + names.join(",") + ") VALUES (" + q.join(",") + ");";
                    db.execute(sqlInsert, values);
                });
                db.execute("COMMIT;");
                db.close();
                collection.trigger("sync");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("data", exports.definition, []);

collection = Alloy.C("data", exports.definition, model);

exports.Model = model;

exports.Collection = collection;