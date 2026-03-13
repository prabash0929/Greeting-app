const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let userName = "";

// Home Page
app.get("/", (req, res) => {
  res.render("index");
});

// POST request to get name
app.post("/greet", (req, res) => {
  userName = req.body.name;
  res.redirect("/hello");
});

// GET request to display name
app.get("/hello", (req, res) => {
  res.render("greeting", { name: userName });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});