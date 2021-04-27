//external modules//
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");

//internal modules// 
// const db = require("./models");
const controllers = require("./controllers");

//instanced modules//
const app = express();

//configuration var//
//require('dotenv').config();
//const PORT = process.env.PORT || 7000;
const PORT = 7000;

//app config//

app.set("view engine", "ejs");

//middleware//
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use(session({
	store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/blogdb"}),
	secret: "Super Secret Coffee",
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7 * 2 
	}
}));

//controllers//
app.use("/products", controllers.products);
app.use("/", controllers.auth);

//Index route
app.get("/", function (request, response){
    response.render("Home");
});


//server bind//
app.listen(PORT, function () {
    console.log(`Loading server from PORT ${PORT}!`)
});

// enable app
module.exports = app;