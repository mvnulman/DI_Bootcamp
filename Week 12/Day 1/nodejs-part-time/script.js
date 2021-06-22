// XP Exercise
// ----------------
// const a = 10;
// const b = 5;
// console.log(a+b)

// setTimeout( () => {
//     console.log('after 5 seconds')
// }, 5000)

// const users = require('./script2.js');

// users.getUsers()
// .then(data => {
//   console.log(data);
// })
// .catch(e =>{
//   console.log(e);
// })


// How to create a server
const http = require('http');

const server = http.createServer( ()=> {
    console.log('hello, this is my first server');
})
server.listen(3000)