const chalk = require("chalk");
const notes = require("./notes");
const yargs = require("yargs");

//Customize yargs version

yargs.version("1.1.0");

// Add, remove, read, list

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body Description",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note handler");
  },
});

yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function () {
    console.log("Reading a note handler");
  },
});

yargs.command({
  command: "list",
  describe: "Listing notes handler",
  handler: function () {
    console.log("listing notes handler");
  },
});
