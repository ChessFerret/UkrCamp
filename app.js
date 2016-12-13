var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("This is landing page");
});

app.listen(3000, function() {
	console.log("The YelpCamp Server has started.");
})
