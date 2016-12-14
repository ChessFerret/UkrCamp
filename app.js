var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
		{name: "Sofiyivsky Park", image: "https://c8.staticflickr.com/1/93/246477439_5ea3e472a0_z.jpg"},
		{name: "Buchansky Park", image: "https://c5.staticflickr.com/7/6186/6090714876_44d269ed7e_z.jpg"},
		{name: "Pushtcha Voditsa Park", image: "https://c7.staticflickr.com/6/5319/7407436246_0ac54dd559_z.jpg"},
		{name: "Waterfall", image: "https://farm2.staticflickr.com/1203/1132895352_afd086a60b.jpg"},
		{name: "Buchansky Park", image: "https://c5.staticflickr.com/7/6186/6090714876_44d269ed7e_z.jpg"},
		{name: "Pushtcha Voditsa Park", image: "https://c7.staticflickr.com/6/5319/7407436246_0ac54dd559_z.jpg"},
		{name: "Sofiyivsky Park", image: "https://c8.staticflickr.com/1/93/246477439_5ea3e472a0_z.jpg"},
		{name: "Buchansky Park", image: "https://c5.staticflickr.com/7/6186/6090714876_44d269ed7e_z.jpg"},
		{name: "Pushtcha Voditsa Park", image: "https://c7.staticflickr.com/6/5319/7407436246_0ac54dd559_z.jpg"},
]

app.get("/", function(req, res) {
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	//redirect back to campgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new" , function(req, res) {
	res.render("new");
})



app.listen(3000, function() {
	console.log("The UkrCamp Server has started.");
})
