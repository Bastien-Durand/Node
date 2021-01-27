const request = require("request");

const weatherURL =
  "http://api.weatherstack.com/current?access_key=fdd2af8236f75ed878fc09269407c622&query=37.8267,-122.4233&units=m";

request({ url: weatherURL, json: true }, (error, response) => {
  const data = response.body.current;
  const currentTemp = data.temperature;
  const feelsLike = data.feelslike;
  console.log(
    `${data.weather_descriptions[0]} & is currently ${currentTemp} degrees. Feels like ${feelsLike} degrees`
  );
});

const geoURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmR1cmFuZCIsImEiOiJja2tlcXZpNHkwZXh3Mm5qenBia3hnNmhzIn0.8_ergVy1AEdSzbUzD8BdDA&limit=1";

request({ url: geoURL, json: true }, (error, response) => {
  console.log(response.body.features);
});

console.log("Finished before request callback");

// Callback
// setTimeout(() => {
//   console.log("30s");
// }, 2000);
