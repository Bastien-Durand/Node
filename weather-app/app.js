const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const arg = process.argv[2];

if (process.argv[2]) {
  arg.toString();
  geoCode(arg, (error, geoData) => {
    if (error) {
      return console.log(error);
    }

    forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(geoData.location);
      console.log(forecastData);
    });
  });
} else {
  return console.log(
    "Please enter a location as an argument like: node app.js Sydney"
  );
}
