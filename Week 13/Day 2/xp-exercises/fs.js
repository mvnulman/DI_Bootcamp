//--------------------------------------------
// Exercise 1 : Reading From A File In Node.JS
//--------------------------------------------
// Instructions
// Create a text file and write something inside (example: ‘Some Text To See’)
// Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal

const fs = require ('fs');

fs.readFile('./text.txt', (err, data) => {
    if (err) {
        console.log('error!!!')
    }
    else {
        console.log(data.toString());
    }
})

