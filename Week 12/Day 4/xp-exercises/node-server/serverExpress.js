//--------------------
// Exercise 3 : HTTP
//--------------------
// Instructions

// Create a server file, name it - serverExpress.js
// Use express to create a server. Return an HTML line of code (Use only HTML tags, no HTML files), for requests to the root URL (/).
// Remember to use the GET method for the server route.
// Your server should run on http://localhost:3000/


const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('<h1>This is an HTML tag</h1>')
})
 
app.listen(3000, () => {
    console.log('listening port 3000')
});