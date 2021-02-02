const http = require("http");

const URL =
  "http://api.weatherstack.com/current?access_key=fdd2af8236f75ed878fc09269407c622&query=45,-75&units=f";

const request = http.request(URL, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("an Error", error);
});

request.end();
