const exp = require ('express');
const cors = require ('cors');
const knex = require ('knex');

const db = knex ({
    client: 'pg',
    connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '1234',
    database : 'dvdrental'
    }
});


const app = exp();
app.use(cors());

app.get('/countries', (req,res)=>{
    getCountries()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send({message:err.message})
    })
  
  });
  
  app.get('/cities/:country_id',(req,res) => {
      const id = req.params.country_id;
      getCities(id)
      .then(result => {
          res.send(result)
      })
      .catch (err => {
          res.send({message:err.message})
      })
  })

  const getCountries = () => {
    return db('country')
    .select('country_id','country')
    .orderBy('country')
  }

//select city_id, city from city where country_id = 15
const getCities = (id) => {
    return db('city')
    .select('city_id', 'city')
    .where({country_id:id})
    .orderBy('city')
}

app.listen(5000);