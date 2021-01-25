const request = require("request");

const URL =
  "http://api.weatherstack.com/current?access_key=fdd2af8236f75ed878fc09269407c622&query=37.8267,-122.4233";

request(URL, function (error, response, body) {
  console.error("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
});

console.log("Finished before callback");
