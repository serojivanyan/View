const mongoose = require("mongoose");

module.exports = function(){
	console.log("mongoose log");
	mongoose.connect("mongodb://@ds123129.mlab.com:23129/shopdatabase");
	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function(){
  		console.log("we are conected");
	});
};
