const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
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

const removeNote = function (title) {
  try {
    const notes = loadNotes();
    const newNotes = notes.filter(function (note) {
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

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};

// [{"title":"1","body":"1"},{"title":"2","body":"2"},{"title":"3","body":"3"},{"title":"4","body":"4"}]
