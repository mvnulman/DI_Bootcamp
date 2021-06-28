//-----------------------------------------
// Exercise 2 : Writing Files With Node JS
//-----------------------------------------
// Instructions
// Create an fs.js file, and use the Node js File System to create a new text file and write to it.
  
const fs = require("fs");

fs.writeFile('./data.txt', 'SOME DATA', err => {
  if (err) {
    console.log(err.message);
  }
});
