const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
console.log(dataBuffer);

const dataJSON = dataBuffer.toString();
console.log(dataJSON);

const user = JSON.parse(dataJSON);
user.name = "Brittany";
user.age = 42;
console.log(user);

const userJSON = JSON.stringify(user);
console.log(userJSON);

fs.writeFileSync("1-json.json", userJSON);
