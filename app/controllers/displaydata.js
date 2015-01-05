var args = arguments[0] || {};
console.log("displaying DATA ::: "+JSON.stringify(args));
exports.openMainWindow = function(_tab) {
	console.debug("This is child widow tabViewOneChild.js" +_tab);
	_tab.open($.window_displaydata);
	$.table_displaydata.search = $.search_history;
	Alloy.Collections.data.fetch();
};

function transformFunction(model) {
	var transform = model.toJSON();
	console.log("transform is ::" +JSON.stringify(transform));
	transform.custom = ">> On "+transform.col1+" , sold : "+transform.col2;
	return transform;
}

//$.table_displaydata.search = $.search_history;

$.table_displaydata.addEventListener("click",function(e){
	console.log("json stringify e : "+JSON.stringify(e) );
});
