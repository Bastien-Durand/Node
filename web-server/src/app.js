const express = require("express");
const path = require("path");

const PORT = 3000;

const app = express();

//This is the root being served as a static directory

app.use(express.static(path.join(__dirname, "../public")));

app.get("/weather", (req, res) => {
  res.send({
    location: "string",
    forecast: "raining",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
