var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	var campgrounds = [
			{name: "Sofiyivsky Park", image: "https://c8.staticflickr.com/1/93/246477439_5ea3e472a0_z.jpg"},
			{name: "Buchansky Park", image: "https://c5.staticflickr.com/7/6186/6090714876_44d269ed7e_z.jpg"},
			{name: "Pushtcha Voditsa Park", image: "https://c7.staticflickr.com/6/5319/7407436246_0ac54dd559_z.jpg"},
	]

	res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, function() {
	console.log("The UkrCamp Server has started.");
})
