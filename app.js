// SETUP
import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

const	app 	= express(),
		port	= process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

// ROUTES
app.get("/", (req, res) => {
	try {
		res.render("start");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/login", (req, res) => {
	try {
		res.render("login");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/checkout", (req, res) => {
	try {
		res.render("checkout");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})


app.get("/login", (req, res) => {
	try {
		res.render("login");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})

app.get("/shop", (req, res) => {
	try {
		res.render("shop");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/home", (req, res) => {
	try {
		res.render("home");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/about", (req, res) => {
	try {
		res.render("about");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})

app.get("/buy", (req, res) => {
	try {
		res.render("buy");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/cart", (req, res) => {
	try {
		res.render("cart");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product1", (req, res) => {
	try {
		res.render("product1");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/contact", (req, res) => {
	try {
		res.render("contacts");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})

app.get("/product2", (req, res) => {
	try {
		res.render("product2");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})

app.get("/product3", (req, res) => {
	try {
		res.render("product3");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product4", (req, res) => {
	try {
		res.render("product4");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product5", (req, res) => {
	try {
		res.render("product5");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product6", (req, res) => {
	try {
		res.render("product6");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product7", (req, res) => {
	try {
		res.render("product7");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product8", (req, res) => {
	try {
		res.render("product8");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product9", (req, res) => {
	try {
		res.render("product9");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product10", (req, res) => {
	try {
		res.render("product10");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product11", (req, res) => {
	try {
		res.render("product11");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product12", (req, res) => {
	try {
		res.render("product12");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product13", (req, res) => {
	try {
		res.render("product13");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product14", (req, res) => {
	try {
		res.render("product14");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product15", (req, res) => {
	try {
		res.render("product15");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product16", (req, res) => {
	try {
		res.render("product16");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product17", (req, res) => {
	try {
		res.render("product17");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product18", (req, res) => {
	try {
		res.render("product18");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product19", (req, res) => {
	try {
		res.render("product19");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})
app.get("/product20", (req, res) => {
	try {
		res.render("product20");
	}
	 catch(err) {
		res.render("errorpage");
		console.log(err);
	}
})

app.get("*", (req, res) => {
	res.render("errorpage");
})


// LISTEN
app.listen(port, () => {
	console.log(`Server starting on port ${port}`);
})