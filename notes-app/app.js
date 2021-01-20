const notes = require("./notes");
const yargs = require("yargs");

//Customize yargs version

yargs.version("1.1.0");

// Add, remove, read, list

// Create add command
yargs.command({
  command: "add",
  describe:
    "Add a new note requires the --title='____' flag & the --body='____' flag",
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
      describe: "Remove a note requires the --title='____' flag",
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
  describe: "Reading a note requires the --title='____' flag",
  builder: {
    title: {
      describe: "Note title for search",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNotes(argv.title);
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
