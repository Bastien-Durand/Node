const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const forecastURL =
    "http://api.weatherstack.com/current?access_key=fdd2af8236f75ed878fc09269407c622&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
    "&units=m";

  request({ url: forecastURL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (response.body.error) {
      callback("Unable to find location. Try another search term.", undefined);
    } else {
      callback(undefined, {
        current: response.body.current.weather_descriptions,
        temp: response.body.current.temperature,
        wind: response.body.current.wind_speed,
      });
    }
  });
};

module.exports = forecast;
