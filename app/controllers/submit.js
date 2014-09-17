var args = arguments[0] || {};
function sendEmail() {	
	var emailDialog = Ti.UI.createEmailDialog();
	emailDialog.subject = "BayaInc. Sale data";
	emailDialog.toRecipients = ['phakhruddin@gmail.com'];
	emailDialog.messageBody = 'Sale data is attached !';
	var fcsv = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory,'sale.csv');
	var ftxt = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory,'sale.txt');
	var f = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory,'barcode.txt');
	emailDialog.addAttachment(ftxt);
	emailDialog.addAttachment(fcsv);
	emailDialog.addAttachment(f);
	emailDialog.open();
};

$.sendemail.addEventListener("click", function(){
	sendEmail();
});
