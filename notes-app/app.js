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
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});
///////////////////////////
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title for deletion",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});
///////////////////////////
yargs.command({
  command: "read",
  describe: "Reading a note",
  builder: {
    title: {
      describe: "Note title for search",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Listing notes handler",
  handler: () => {
    notes.listNotes();
  },
});

yargs.parse();
