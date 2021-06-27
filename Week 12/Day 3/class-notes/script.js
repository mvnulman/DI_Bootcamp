// How to create a server
// um dos exercícios da aula 4.

// const http = require('http');

// const server = http.createServer((request, response)=> {
//     console.log('hello, this is my first server');
//     let obj = {
//         name:'Ziv',
//         username: 'zivuch'
//     }
//     response.end(JSON.stringify(obj))
// })
// server.listen(3000)



// exemplos
// const http = require('http');

// const server = http.createServer((request, response)=> {
//     console.log('hello, this is my first server');

//     console.log('request=>', request);
    
//     let obj = {
//         name:'Ziv',
//         username: 'zivuch'
//     }
//     response.end(JSON.stringify(obj))
// })
// server.listen(3000)


// exemplos
// const http = require('http');

// const server = http.createServer((request, response)=> {
//     console.log('hello, this is my first server');

//     console.log('request=>', request.headers);
    
//     let obj = {
//         name:'Ziv',
//         username: 'zivuch'
//     }
//     response.end(JSON.stringify(obj))
// })
// server.listen(3000)


// exemplos
// const http = require('http');

// const server = http.createServer((request, response)=> {
//     console.log('hello, this is my first server');

//     console.log('request=>', request.url);
    
//     let obj = {
//         name:'Ziv',
//         username: 'zivuch'
//     }
//     response.end(JSON.stringify(obj))
// })
// server.listen(3000)


//express server example
// const exp = require('express')
// const app = exp();

// app.get('/', (req, res) =>{
//     res.send('hello from express server')
// })

// app.listen(3000)


//express server example com outros caminhos raiz e também com o método post too.
// const exp = require('express')
// const app = exp();

// app.get('/', (req, res) =>{
//     res.send('hello from express server')
// })

// primeira opção para se usar com mais de um método para a mesma raiz.
// app.get('/login', (req, res) =>{
//     res.send('hello from login root')
// })

// app.post('/login', (req, res)=>{

// })

// segunda opção de colocar mais de um método junto, economizando código
// app.route('/login')
//     .get((req, res)=> {

//     })
//     .post ((req, res) =>{

//     })

//     .put ((req.rest) =>{

//     })


// app.set('port', 9000)
// app.listen(app.get ('port'), () => {
//     console.log(`Server listening to port ${app.get('port')}`);
// })


// exemplo com express e objeto (Não precisa fazer com JSON ou STRIGINFID)
// const exp = require('express')
// const app = exp();

// app.get('/', (req, res) =>{
//     let obj = {
//         name: 'marcos',
//         username: 'nulman'
//     }
//     res.send(obj)
// })

// app.listen(3000)


//exemplo com páginas estáticas (aqui, você irá replicar as páginas estáticas que estarão armezadas, i.e: Index.html, etc.)
// const exp = require('express')
// const app = exp();

// app.use('/', exp.static(__dirname+'/public'))
// app.get('/login', (req, res) => {
//     res.send(`hello ${req.query.username} and ${req.query.password}`)
//     console.log(req.query)
// })

// app.post('/login', (req, res) => {
//     res.send(`hello ${req.query.username} and ${req.query.password}`)
//     console.log(req.body)
// })

// app.listen(3000)



// //exemplo com páginas estáticas já com como obter as infos dos formulários
// const exp = require('express')
// const app = exp();

// app.use('/', exp.static(__dirname+'/public'))
// app.get('/login', (req, res) => {
//     res.send(`hello ${req.query.username} and ${req.query.password}`)
//     console.log(req.query)
// })


// app.listen(3000)




//body parser

// const exp = require('express')
// const app = exp();
// const bp = require('body-parser');

// app.use('/', exp.static(__dirname+'/public'))
// app.get('/login', (req, res) => {
//     res.send(`hello ${req.query.username} and ${req.query.password}`)
//     console.log(req.query)
// })

// app.post('/login', (req, res) => {
//     console.log(req.body)
//     res.send('post request')
// })

// app.listen(3000)

// // parse application/x-www-form-urlencoded
// app.use(bp.urlencoded({ extended: false }))
 
// // parse application/json
// app.use(bp.json())


//id exercise restfull api
const exp = require('express')
const app = exp();

app.get('/user/:users', (req, res) => {
    console.log(req.params);
    res.send('rest api')
})

app.listen(3000)
