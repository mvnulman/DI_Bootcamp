const knex = require('knex')

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port: '5432',
      user : 'postgres',
      password : '1234',
      database : 'dvdrental'
    }
  });


//Here we connect the database from our choose and show the infos in the terminal
// select country, country_id from country
// db('country')
// .select('country', 'country_id')
// .then(res => {
//       console.log(res);
//   })
//   .catch (e=> {
//       console.log(e);
//   })

//exemplo com Where junto
// db('country')
// .select('country', 'country_id')
// .where ({country: 'Israel'})
// .then(res => {
//       console.log(res);
//   })
//   .catch (e=> {
//       console.log(e);
//   })

//exemplo com update de infos
// db('country')
// .where ({country_id: 100})
// .update ({country: 'New Israel'})
// .then(res => {
//       console.log(res);
//   })
//   .catch (e=> {
//       console.log(e);
//   })

//   //exemplo com insert the infos
// db('country')
// .insert ({country: 'Web JS 17'})
// .returning('*')
// .then(res => {
//       console.log(res);
//   })
//   .catch (e=> {
//       console.log(e);
//   })

//exemplo com insert the infos, com array 
// db('country')
// .insert  (
//     [
//     {country: 'New New Web JS 17'},
//     {country: 'NEW Web JS 17'}
// ])
// .returning('*')
// .then(res => {
//       console.log(res);
//   })
//   .catch (e=> {
//       console.log(e);
//   })

// // Delete example
// db('country')
// .where ({country_id: 111})
// .del()
// .returning('*')
// .then(res => {
//       console.log(res);
//   })
//   .catch (e=> {
//       console.log(e);
//   })


// JOIN examples
// db('city')
// .join ('country', 'city.country_id', '=', 'country.country_id')
// .select ('city.city', 'country.country')
// .returning('*')
// .then(res => {
//       console.log(res);
//   })
//   .catch (e=> {
//       console.log(e);
//   })