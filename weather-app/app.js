const geoCode = require("./utils/geocode");

geoCode("Boston", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
