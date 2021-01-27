const request = require("request");

// const weatherURL =
//   "http://api.weatherstack.com/current?access_key=fdd2af8236f75ed878fc09269407c622&query=37.8267,-122.4233&units=m";

// request({ url: weatherURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     const data = response.body.current;
//     const currentTemp = data.temperature;
//     const feelsLike = data.feelslike;
//     console.log(
//       `${data.weather_descriptions[0]} & is currently ${currentTemp} degrees. Feels like ${feelsLike} degrees, I'm the first call in the codebase`
//     );
//   }
// });

const geoURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmR1cmFuZCIsImEiOiJja2tlcXZpNHkwZXh3Mm5qenBia3hnNmhzIn0.8_ergVy1AEdSzbUzD8BdDA&limit=1";

request({ url: geoURL, json: true }, (error, response) => {
  if (error) {
    console.log("There was an error");
  } else if (response.body.features.length === 0) {
    console.log("Invalid search terms, Try another");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }

  console.log(
    "Finished before request callback, I'm the last console.log in the codebase"
  );
});

// Callback
// setTimeout(() => {
//   console.log("30s");
// }, 2000);
