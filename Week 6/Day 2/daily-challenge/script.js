// Instructions
// Using this array:

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];


// 1 - Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.

// gameInfo.forEach ((item, i, array) => {
//     array[i] = item.username + `!`
//     })
    
//     console.log(gameInfo);

// 2 - Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// Tip: Use the ternary operator

// let bigScore = [];
// gameInfo.forEach((item) =>{
//     item.score > 5 ? bigScore.push(item.username):"";
// })
// console.log(bigScore);


// 3 - Find the total score of the users, and display it.*/
// let sumScore = 0;
// gameInfo.forEach((item) =>{
//     sumScore += item.score
// })
// console.log(sumScore);


