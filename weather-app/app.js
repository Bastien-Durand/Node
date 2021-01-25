const request = require("request");

const URL =
  "http://api.weatherstack.com/current?access_key=fdd2af8236f75ed878fc09269407c622&query=37.8267,-122.4233";

request({ url: URL }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});

console.log("Finished before callback");
