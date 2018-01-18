var weather = require("weather-js");

const fs = require('fs');



var UserSearch =  function(user, location){
  this.name = user,
  this.location = location,
  this.time = Date.now(),
  this.getWeather = function(){
    var now = this.time;
    weather.find({ search: this.location, degreeType: `F` }, function(err, result) {
    // If there is an error log it.
      if (err) {
          console.log(err);
        };
        console.log(JSON.stringify(result, null, 2));
        var str = `${user} searched for ${location} at ${now}.\n`;
        fs.appendFile('./log.txt', str, (err) => {
          if (err) throw err;
        });
    });
  };
};

module.exports = UserSearch;
