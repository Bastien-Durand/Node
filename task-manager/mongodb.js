// CRUD operations

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.01:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);

    // FIND SINGLE TASK BY OBJECTID

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("602c5bd1e1c3e15e058a4dde") },
    //   (error, task) => {
    //     if (error) {
    //       console.log(error);
    //     }
    //     console.log("Task found by ID");
    //     console.log(task);
    //   }
    // );

    // FIND COMPLETED TASKS IN COLLECTION RETURN AS ARRAY

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       console.log(error);
    //     }
    //     console.log("Tasks not yet complete:");
    //     console.log(tasks);
    //   });

    // .find users with age 26 in DB and return in an array the collections

    // db.collection("users")
    //   .find({ age: 26 })
    //   .toArray((error, users) => {
    //     if (error) {
    //       return console.log("Unable to fetch collection users");
    //     }
    //     console.log(users);
    //   });

    // db.collection("users").findOne(
    //   { _id: new ObjectID("602b47ab61bcb75b45ef22b2") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );

    // .count find the number of users without storing in memory the users within an array

    // db.collection("users")
    //   .find({ age: 26 })
    //   .count((error, count) => {
    //     if (error) {
    //       return console.log("Unable to fetch collection users");
    //     }
    //     console.log(count);
    //   });

    // INSERT ONE

    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Vikram",
    //     age: 28,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // INSERT MANY #1

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

    // INSERT MANY #2

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Study up on mongoDB",
    //       completed: false,
    //     },
    //     {
    //       description: "Create a slack bot",
    //       completed: false,
    //     },
    //     {
    //       description: "Meet Sam to discuss antler idea",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("There was an error writing to database");
    //     }

    //     console.log(result.ops);
    //   }
    // );
  }
);

// add in terminal to start server from ~ directory (Second Terminal)
// /Users/bastiendurand/mongodb/bin/mongod --dbpath=/Users/bastiendurand/mongodb-data
