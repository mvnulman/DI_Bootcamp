// ---------------------------------------------
// // Exercise 1: Simple If/Else Statement
// ---------------------------------------------
// // Instructions
// // Create 2 variables, x and y. Each of them should have a different numeric value.
// // Write an if/else statement that checks which number is bigger.
// // Example :

// let x = 5;
// let y = 2;

// if (x > y){
//     console.log("X is the biggest number")
// }else{
//     console.log("Y is bigger");
// }

// // // You should display:
// // // x is the biggest number


// ---------------------------------------------
// Exercise 2: Chihuahua
// ---------------------------------------------
// Instructions
// Create a variable called newDog where it’s value is “Chihuahua”.
// let newDog = "Chihuahua";
//     console.log(newDog);
// // Check and display how many letters are in newDog.
//    console.log("there are ", newDog.length, "characters in newdog.");
// // Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
//     console.log(newDog.toUpperCase());
//     console.log(newDog.toLowerCase());
// // Check if the variable newDog is equal to “Chihuahua”
//     console.log(newDog == "Chihuahua");
// // if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// if (newDog == "Cats") {
//     console.log("I love Chihuahuas, it’s my favorite dog breed");

//     // else, console.log ‘I dont care, I prefer cats’
// } else {
//     console.log ("I dont care, I prefer cats");
// }


// ---------------------------------------------
// Exercise 3: Even Or Odd
// ---------------------------------------------

// Instructions
// Prompt the user for a number and save it to a variable.
// let number = parseInt( prompt("Please enter a number:"));
// // If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// if (number % 2 == 0) {
// 	console.log(`${number} is an even number!`);
// // If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
// } else {
//     console.log(`${number} is an odd number!`)};


// ---------------------------------------------
// Exercise 4: 
// ---------------------------------------------
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
console.log(users);

// Using the array above, console.log the number of users in a group chat based on the following rules:

// If there is no users (the users array is empty), console.log “no one is online”.
if (users.lenght == 0) {
    console.log('no one is online');

}

// If there is 1 user, console.log “<name_user> is online”.
else if (users.length == 1) 
{
	console.log(`${users[0]} is online`);
}


// // If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
else if (users.length == 2) 
{
	console.log(`${users[0]} and ${users[1]} are online`);
}

// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
else if (users.length > 2) 
{
	console.log(`${users[0]} , ${users[1]} and ${users.length = users.length - 2} more are online`);
}