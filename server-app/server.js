// import express, cors and body-parser
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

const signupController = require("./controllers/signupController");

app.use(cors());
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("Hello World!");
});

// registration api
app.post("/signup", signupController.signupRender);

app.listen(8500, function() {
  console.log("Server app listening on http://localhost:8500/");
});
