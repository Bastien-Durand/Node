const request = require("request");

const geoCode = (address, callback) => {
  const geoURL =
    `https://api.mapbox.com/geocoding/v5/mapbox.places/` +
    encodeURIComponent(address) +
    `}.json?access_token=pk.eyJ1IjoiYmR1cmFuZCIsImEiOiJja2tlcXZpNHkwZXh3Mm5qenBia3hnNmhzIn0.8_ergVy1AEdSzbUzD8BdDA&limit=1`;

  request({ url: geoURL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

// geoCode("Boston", (error, data) => {
//     console.log("Error", error);
//     console.log("Data", data);
//   });

module.exports = geoCode;