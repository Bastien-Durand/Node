// CRUD operations

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.01:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);

    db.collection("users").insertOne({
      name: "Bastien",
      age: 26,
    });
  }
);

// add in terminal to start server from ~ directory (Second Terminal)
// /Users/bastiendurand/mongodb/bin/mongod --dbpath=/Users/bastiendurand/mongodb-data
