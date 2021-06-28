//-------------------------------------------------------
// Exercise 3 : Appending And Deleting Files With Node JS
//-------------------------------------------------------
// Instructions
// Create an fs.js file, and use the Node js File System to create and write to a new text file. (Example: “Buy Milk”)

const fs = require("fs");

fs.writeFile('./data3.txt', 'Buy Milk', err => {
  if (err) {
    console.log(err.message);
  }
});

fs.appendFile('./data3.txt', '\nMore data added', err => {
  if (err) {
    console.log(err.message);
  }
});

fs.unlink('./data3.txt', err => {
  if (err) {
    console.log(err.message);
  }
});