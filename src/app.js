"use-strict"
// NPM Packages
var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var Firebase = require("firebase");

var port = process.env.PORT || 7070;

var app = express();

app.use(express.static(__dirname + "../build"))

app.get("/", function(req, res){
  res.sendFile("index.html");
});

app.listen(port, function(){
  console.log("Frontend server running on " + port)
});
