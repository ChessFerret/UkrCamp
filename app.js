var express 		= require("express"),
		 app 				= express()
		 bodyParser = require("body-parser"),
		 mongoose 	= require("mongoose");

mongoose.connect("mongodb://localhost/ukr_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 		name: "Sofiyivsky Park",
// 	 	image: "https://c8.staticflickr.com/1/93/246477439_5ea3e472a0_z.jpg"},
// 	 	function(err, campground) {
// 	 		if (err) {
// 	 			console.log(err);
// 	 		} else {
// 	 			console.log("Campground added: ");
// 	 			console.log(campground);
// 	 		}
// 	 	});

app.get("/", function(req, res) {
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	//res.render("campgrounds", {campgrounds: campgrounds});
	//get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds) {
		if (err) {
			console.log(err);
		} else {
			res.render("campgrounds", {campgrounds: allCampgrounds});
		}
	});
});

app.post("/campgrounds", function(req, res) {
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	// create a new campground and save it to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if (err) {
			console.log(err);
		} else {
			res.redirect("/campgrounds");
		}
	});
});

app.get("/campgrounds/new" , function(req, res) {
	res.render("new");
})



app.listen(3000, function() {
	console.log("The UkrCamp Server has started.");
})
