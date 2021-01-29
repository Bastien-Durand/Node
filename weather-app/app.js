const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geoCode("Boston", (error, data) => {
  console.log("geoCode()");
  console.log("Error", error);
  console.log("Data", data);
});

forecast(44.1545, -75.7088, (error, data) => {
  console.log("forecast()");
  console.log("Error", error);
  console.log("Data", data.current.weather_descriptions);
  console.log("Temp", data.current.temperature);
  console.log("Wind Speed", data.current.wind_speed);
});
