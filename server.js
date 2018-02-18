var express = require("express");
var method = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes.
var routes = require("./controllers/horse-controller.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});
