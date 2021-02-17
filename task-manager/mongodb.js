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

    // INSERT ONE

    // db.collection("users").insertOne(
    //   {
    //     name: "Bastien",
    //     age: 26,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // INSERT MANY

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28,
    //     },
    //     {
    //       name: "Gunther",
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection("tasks").insertMany(
      [
        {
          description: "Study up on mongoDB",
          completed: false,
        },
        {
          description: "Create a slack bot",
          completed: false,
        },
        {
          description: "Meet Sam to discuss antler idea",
          completed: true,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("There was an error writing to database");
        }

        console.log(result.ops);
      }
    );
  }
);

// add in terminal to start server from ~ directory (Second Terminal)
// /Users/bastiendurand/mongodb/bin/mongod --dbpath=/Users/bastiendurand/mongodb-data
