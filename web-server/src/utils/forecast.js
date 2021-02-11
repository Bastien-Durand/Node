const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const forecastURL =
    "http://api.weatherstack.com/current?access_key=fdd2af8236f75ed878fc09269407c622&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  request({ url: forecastURL, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search term.", undefined);
    } else {
      callback(
        undefined,
        "It is currently " +
          body.current.temperature +
          " Degrees, " +
          body.current.weather_descriptions +
          " with " +
          body.current.wind_speed +
          "km wind"
      );
    }
  });
};

module.exports = forecast;
