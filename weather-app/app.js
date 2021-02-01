const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const chalk = require("chalk");

console.log(
  chalk.yellow(
    "For locations that require spacing such as New York, Write them with 'quotes'"
  )
);

const address = process.argv[2];

if (address) {
  address.toString();
  geoCode(address, (error, geoData) => {
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
