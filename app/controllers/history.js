var args = arguments[0] || {};

$.label_loaddata.addEventListener("click", function() {
	Alloy.Globals.getGeneralData();
});

$.label_emaildata.addEventListener("click", function(){
	sendEmail();
});

$.row_displaydata.addEventListener("click", function(){
	//next page
	var tabViewDisplayDataController = Alloy.createController("displaydata");
  	tabViewDisplayDataController.openMainWindow($.history);	
});

$.row_test.addEventListener("click", function(){
	//next page
	var tabViewDisplayDataController = Alloy.createController("test");
  	tabViewDisplayDataController.openMainWindow($.history);	
});

function sendEmail() {	
	var sid = "1J0HGpursjzDKNKbjcutA8vY974D8u7dK32264aL3ARY";
	var thefile = "gss"+sid+".txt";
	var emailDialog = Ti.UI.createEmailDialog();
	emailDialog.subject = "Bayinc. Raw Data";
	emailDialog.toRecipients = ['phakhruddin@gmail.com'];
	emailDialog.messageBody = 'This is raw data';
	var rtxt = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, thefile);
	emailDialog.addAttachment(rtxt);
	emailDialog.open();
};
