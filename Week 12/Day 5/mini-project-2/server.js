const exp = require('express');
const bp = require ('body-parser');
const dotenv = require ('dotenv');
//Will read the .env file and read all the properties inside
const Parser = require('rss-parser');
const cors = require('cors');

const app = exp();
app.use ( cors() );
// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: false }))
// parse application/json
app.use(bp.json());
app.use('/',exp.static(__dirname+'/public'))


dotenv.config();
//it's gonna create a new file .env

app.get('/rss',(req, res)=> {
    rss()
    .then(posts => {
        res.send(posts)
    })
    .catch(err => {
        console.log(err);
    })
})


const rss = async() => {
    const parser = new Parser();
    const feed = await parser.parseURL('https://www.thefactsite.com/feed/')
    return feed.items;
}
rss().then(data => {
    console.log(data);
})

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`listen on port ${app.get('port')}`)
})