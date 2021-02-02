const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello express!");
});

app.get("/help", (req, res) => {
  res.send("Help");
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.get("/weather", (req, res) => {
  res.send({
    location: "string",
    forecast: "raining",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
