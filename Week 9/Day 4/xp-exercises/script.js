//------------------------
// Exercise 1: Conversion
//------------------------
// Instructions
// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);

// const fetchStarWars = async () => {
//     try {
//         const response = await fetch ("https://swapi.dev/api/starships/9/");
//         const data = response.json();
//         return data;

//     } catch (e) {
//         console.log(e)
//     }
// }

// const callStarWars = async() => {
// const usersStarWars =  await fetchStarWars();
// console.log(usersStarWars);
// }

// console.log(callStarWars());

//------------------------
// Exercise 2: Analyze
//------------------------

// Instructions
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

asyncCall();
// Analyze the code provided above what will be the outcome?
// Result: first, 'calling', then after 2 seconds: 'resolved';

