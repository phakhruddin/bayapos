var args = arguments[0] || {};
exports.openMainWindow = function(_tab) {
	console.debug("This is child widow tabViewOneChild.js" +_tab);
	_tab.open($.window_test);
	};
	
$.table_test.addEventListener("click", function(e){
	console.log("Json table_test e : "+JSON.stringify(e));
});
