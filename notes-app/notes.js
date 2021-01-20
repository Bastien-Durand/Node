const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// List collection of notes by title

const listNotes = () => {
  console.log(chalk.inverse("Your notes"));
  const notes = loadNotes();
  notes.forEach((note) => console.log(`Title: ${note.title}`));
};

// Add a note to collection

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("New note added!"));
  } else {
    console.log(chalk.red("Note title taken!"));
  }
};

// Remove a note from collection by title

const removeNote = (title) => {
  try {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => {
      if (note.title !== title) {
        return note;
      }

      console.log(chalk.inverse.green("Note remove Successful"));
    });
    const jsonNotes = JSON.stringify(notes);
    const jsonNewNotes = JSON.stringify(newNotes);
    if (jsonNotes === jsonNewNotes) {
      console.log(chalk.inverse.red("No note found"));
    }
    saveNotes(newNotes);
  } catch (error) {
    console.log(chalk.red("There was an issue saving"));
  }
};

// Save new collection of notes

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  listNotes: listNotes,
  addNote: addNote,
  removeNote: removeNote,
};

// [{"title":"1","body":"1"},{"title":"2","body":"2"},{"title":"3","body":"3"},{"title":"4","body":"4"}]
