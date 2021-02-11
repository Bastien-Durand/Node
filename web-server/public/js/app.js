console.log("Client side javascript file is loaded");

fetch("http://puzzle.mead.io/puzzle").then((response) => {
  console.log(response);
});
