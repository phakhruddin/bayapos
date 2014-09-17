// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Alloy.Globals.getGeneralData = function(sid) {	
	var sid = "1J0HGpursjzDKNKbjcutA8vY974D8u7dK32264aL3ARY";
	//var url = "http://thetolleasy.com/"+loc+".json";
	//var url = "http://54.197.150.195:10000/"+loc+".json";
	//var url = "http://thetolleasy.com/"+loc;
	var url = "https://spreadsheets.google.com/feeds/list/"+sid+"/od6/public/basic?hl=en_US&alt=json";
	var thefile = "gss"+sid+".txt";
	var xhr = Ti.Network.createHTTPClient({
	    onload: function(e) {
	    try {
			// parse the retrieved data, turning it into a JavaScript object
	    	json = JSON.parse(this.responseText);
	    	console.log("json data after download : " +JSON.stringify(json));
	    	var file = Ti.Filesystem.getFile(
				Ti.Filesystem.tempDirectory, thefile
			);
			if(file.exists() && file.writeable) {
			    var success = file.deleteFile();
			    Ti.API.info((success==true) ? 'success' : 'fail'); // outputs 'success'
			}
			file.write(this.responseText);
			Alloy.Collections.data.deleteAll();
			for (var i=0; i < +json.feed.entry.length; i++) {
				var dataModel = Alloy.createModel("data",{
					col1 :  json.feed.entry[i].title.$t,
					col2 : json.feed.entry[i].content.$t,
					col3 : "none",
					col4 : "none",
					col5 : "none",
					col6 : "none",
					col7 : "none",
					col8 : "none",
					col9 : "none",
					col10 : "none",
					col11 : "none",
					col12 : "none",
					col13 : "none",
					col14 : "none",
					col15 : "none"				
				});			
				dataModel.save();
			}
			//
			} catch(e){
				Ti.API.info("cathing e: "+e);
			}
		}
	});
	xhr.onerror = function(e){
		alert(e);
	};
	xhr.open("GET", url);
	xhr.send();
	alert(" Data were successfuly downloaded from "+url+". Please proceed.");
};
