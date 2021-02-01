const notes = require("./notes");
const yargs = require("yargs");
const chalk = require("chalk");

//Customize yargs version

yargs.version("1.1.0");

const command = process.argv[2];
if (!command) {
  console.log(
    chalk.blue.bold(
      "Hang on you're missing an Command line argument to execute a command!"
    )
  );
  console.log(
    "Enter an argument following node app.js in the command line such as 'list'"
  );
  console.log("Available Commands: list, read, add, remove");
}

// Add, remove, read, list

// Create add command
yargs.command({
  command: "add",
  describe:
    "Add a new note requires the --title='____' flag & the --body='____' flag",
  builder: {
    title: {
      describe: "Add a note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Notes Description",
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
  describe: "Remove a note requires the --title='____' flag",
  builder: {
    title: {
      describe: "Remove a note",
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
  describe: "Read a note requires the --title='____' flag",
  builder: {
    title: {
      describe: "Enter a note title",
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
  describe: "List all note titles",
  handler: () => {
    notes.listNotes();
  },
});

yargs.parse();
