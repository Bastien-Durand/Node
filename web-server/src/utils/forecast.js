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
      const current = body.current;
      callback(undefined, {
        time: body.location.localtime,
        icon: current.weather_icons,
        description: current.weather_descriptions,
        temperature: current.temperature,
        uv: current.uv_index,
        windSpeed: current.wind_speed,
        windDir: current.wind_dir,
      });
    }
  });
};

module.exports = forecast;
