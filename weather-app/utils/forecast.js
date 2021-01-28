const request = require("request");

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (latitude, longitude, callback) => {
  const forecastURL =
    "http://api.weatherstack.com/current?access_key=fdd2af8236f75ed878fc09269407c622&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  request({ url: forecastURL, json: true }),
    (error, response) => {
      if (error) {
        console.log("Error");
        callback("Unable to connect to location services", undefined);
      } else if (response.body.error) {
        console.log("Body Error");
        callback(
          "Unable to find location. Try another search term.",
          undefined
        );
      } else {
        console.log("Success");
        callback(undefined, {
          data: response.body.current,
          currentTemp: data.temperature,
          feelsLike: data.feelsLike,
        });
      }
      console.log("out");
    };
  console.log("Outer");
};
forecast(44.1545, -75.7088, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
