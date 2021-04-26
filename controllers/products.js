// require express
const express = require("express");
// set up router
const router = express.Router();
// internal modules (database)
const db = require("../models");

/* RESTFUL ROUTES
URL // HTTP // ACTION
GET - index
GET - new
POST - create
GET - show 
GET - edit 
PATCH/PUT - update
DELETE - destroy
*/

// Index
router.get("/bestsellers", function (request, response) {
	db.Product.find({}, function (err, allProducts) {
		if (err) return response.send(err);

		const context = { products: allProducts };


		response.render("products/index", context);
	});
});





// exports
module.exports = router;