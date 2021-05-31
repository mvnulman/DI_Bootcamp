//------------------------------
// Exercise 1 : Star Wars API
//------------------------------
// Instructions
// Part I

// Using this code:

const urls = [
  'https://swapi.dev/api/people/1',
  'https://swapi.dev/api/people/2',
  'https://swapi.dev/api/people/3',
  'https://swapi.dev/api/people/4'
]


// 1- Use Promise.all to fetch all the characters from the array above with only one request.
// Console.log the output and make sure it has a catch block as well.

Promise.all(urls.map(url => fetch(url).then(res => res.json())))
.then(data => console.log(data))
.catch(error => console.log('ughhhhh... fix this code! Try checking the url :)'))




// Part II

// 1- Change one of the urls in the array provided above. This should cause an error. Make sure your catch block works.
const urls2 = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/peoplse/4'
  ]
  

  Promise.all(urls2.map(url => fetch(url).then(res => res.json())))
.then(data => console.log(data))
.catch(error => console.log('ughhhhh... fix this code! Try checking the url :)'))