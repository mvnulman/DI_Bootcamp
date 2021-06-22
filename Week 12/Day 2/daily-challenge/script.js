//--------------------------------------------------------------------------
// Instructions
//--------------------------------------------------------------------------
// Part I:
// Create a file named main.js that contains a variable const largeNumber = 356; and export the module.
// Use the exported module in a script.js file.
// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b

const b = 5;

const number = require('./main.js')

const c = b + number.largeNumber

console.log(c);

//--------------------------------------------------------------------------

// Part II:
// In a script.js file create a server with http and console.log a message.
// Set the response header, and respond by the result from Part I.
// Also write in a head tag a message like ‘Hi there at the frontend’
// Your server should run on http://localhost:3000/

// const http = require('http');

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write(`My Module is: 361`);
//     res.write(`<h1>Hi there at the frontend<h1>`);
//     res.end();
// }).listen(3000);

// console.log('server loading...')

//---------------------------------------------------------------------------

// Part III:
// Create a file named main.js and create a function that returns the current date and time. Export the module.
// Use the exported module in a script.js file.
// Create a server with http, set the response header and respond with a message that outputs the current date and time from the exported module.
// Your server should run on http://localhost:8080/

let dateNow = require('./main.js')
const http2 = require('http');

http2.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`${dateNow.today}`);
    res.end();
}).listen(8080);

console.log('server loading2...')