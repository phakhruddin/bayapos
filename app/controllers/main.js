var args = arguments[0] || {};
console.log("JSON main :" +JSON.stringify(args));
var barcode = Titanium.App.Properties.setInt('barcode', 0 );

$.save_price_button.addEventListener('click', function(_e) {
    $.price_tf.blur();
    var price = $.price_tf.value;
    Titanium.App.Properties.setInt('price', price );
    $.save_price_button.hide();
 });
 
 $.save_qty_button.addEventListener('click', function(_e) {
    $.qty_tf.blur();
    var qty = $.qty_tf.value;
    Titanium.App.Properties.setInt('qty', qty );
    $.save_qty_button.hide();
 });
 
 $.save_item_button.addEventListener('click', function(_e) {
    $.item_tf.blur();
    var item = $.item_tf.value;
    Titanium.App.Properties.setString('item', item );
    var barcode = Titanium.App.Properties.setInt('barcode', 0 );
    $.save_item_button.hide();
 });
 
  $.save_name_button.addEventListener('click', function(_e) {
    $.name_tf.blur();
    var name = $.name_tf.value;
    Titanium.App.Properties.setString('name', name );
    $.save_name_button.hide();
 });
 
 $.save_paid_button.addEventListener('click', function(_e) {
    $.paid_tf.blur();
    var paid = $.paid_tf.value;
    Titanium.App.Properties.setInt('paid', paid );
    $.save_paid_button.hide();
 });
 
 $.label_done.addEventListener("click", function(){
 	var now = new Date();
 	var barcode = Titanium.App.Properties.getString('barcode') || "Not Scanned";
 	var price = Titanium.App.Properties.getInt('price', price );
 	var qty = Titanium.App.Properties.getInt('qty', qty );
 	var item = Titanium.App.Properties.getString('item', item );
 	var name = Titanium.App.Properties.getString('name', name );
 	var paid = Titanium.App.Properties.getInt('paid', paid );
 	alert("On "+now+" : sold "+qty+" unit(s) of "+item+" at RM"+price+" to "+name+". RM"+paid+" was paid. Barcode is "+Titanium.App.Properties.getString('barcode')+" . Do not forget to say thanks! Alhamdulillah.");
 	var fcsv = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory,'sale.csv');
 	var ftxt = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory,'sale.txt');
	fcsv.write(now+" , "+item+" , "+qty+" , "+price+" , "+name+" , "+paid+" , "+Titanium.App.Properties.getString('barcode')+'\n', true); // write to the file
	ftxt.write(now+" , "+item+" , "+qty+" , "+price+" , "+name+" , "+paid+" , "+Titanium.App.Properties.getString('barcode')+'\n', true); // write to the file
 });
 
 $.name_tf.addEventListener("focus", function(){
 	$.save_name_button.show();
 });
 $.qty_tf.addEventListener("focus", function(){
 	$.save_qty_button.show();
 });
 $.item_tf.addEventListener("focus", function(){
 	$.save_item_button.show();
 });
 $.price_tf.addEventListener("focus", function(){
 	$.save_price_button.show();
 });
 $.paid_tf.addEventListener("focus", function(){
 	$.save_paid_button.show();
 });
 
 $.label_scan.addEventListener("click", function(){
 	var tabViewScanController = Alloy.createController("scan");
  	tabViewScanController.openMainWindow($.tab_main);	
 });
 
 $.table_main.addEventListener("click" , function(){
 	$.name_tf.blur();
 	$.qty_tf.blur();
 	$.item_tf.blur();
 	$.price_tf.blur();
 	$.paid_tf.blur();
 });
