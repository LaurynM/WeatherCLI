var user = require("./user.js");
var admin = require("./admin.js");
var request = require("request");

var module = process.argv[2];

switch (module){
  case "user":
   var userName = process.argv[3];
   var userLocation = process.argv[4];
   var search = new user(userName, userLocation);
   var searchResults = search.getWeather();
  break;
  case "admin":
  break;
}
