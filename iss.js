/*

### Getting some data
  * Create a file called `iss.js`. In it, write a simple node program that 
  will output the latitude and longitude of the International Space Station.
  * Practice your [google-fu] by searching for "iss api" and figuring out 
  the correct URL to use. 
  * Notice that the values provided by the API are very precise. 
  Round off the values to two decimal digits for a nicer display. 
  *Hint: toFixed*
  * Save/commit/push

*/
var request = require('request');


var issDataURL = "http://api.open-notify.org/iss-now.json";

//var issData = [];


request(issDataURL, function(err, response, body) {
    if (err) {
        console.log('there was an error');
    }
    else {
        //console.log(body);
        var issData = JSON.parse(body);
        issData = issData.iss_position;
        issData.latitude = issData.latitude.toFixed(2);
        issData.longitude = issData.longitude.toFixed(2);
        console.log(issData);
    }
});

