//-----------------------------
// Exercise 1 : Your Favorite Colors
//-----------------------------

// Create an array called colors where the value is a list of your favorite colors.
// let colors = ["black", "green", "yellow", "blue", "orange" ]
// console.log(colors);

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// let num;
// for (let i = 0; i < colors.length; i++) {
//     num = i + 1
//     console.log("My #" + num + " choice is " + colors[i])
// }

//-----------------------------
// Exercise 2: List of People
//-----------------------------

// let people = ["Greg", "Mary", "Devon", "James"];

// Write code to remove “Greg” from the people array.
// console.log(people.indexOf("Greg")); //to know the position of each person in the array.
// people.splice(0, 1);
// console.log(people);


// Write code to replace “James” to “Jason”.
// people.splice(3, 1, "Jason");
// console.log(people);


// Write code to add your name to the end of the people array.
// people.push("Marcos");
// console.log(people);


// Using a loop, iterate through the people array and console.log each person.
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i])
// }



// Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i])
//   if (people[i] == "Jason") {
//     break;

//   }

// }

// Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
// let copy = people.splice(2,3);
// console.log(copy);


// Write code that console.logs Mary’s index. take a look at indexOf on google.
// console.log(people.indexOf("Mary"));


// Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
// console.log(people.indexOf("Foo"));

// Create a variable called last which value is the last element of the array.
//  let last = people[people.length - 1];
//  console.log(last);


//--------------------------------
// Exercise 3: Repeat the Question
//--------------------------------

// Prompt the user for a number, while the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// Hint : Check the data type you receive from the prompt (ie. typeof method)

//  let num = prompt("Please enter a number: ");
//  console.log(num);
//  a = parseInt(num);
//  console.log(a);

//  do{ 
//    a = prompt("Please enter a number: ");
//  }
//  while (a<10);
 
//--------------------------------
// Exercise 4: Repeat the Question
//--------------------------------

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

// Prompt the student for their name :
// If the name is in the object, console.log the name of the student and the country they come from.
// example: "Hi! I'm [name], and I'm from [country]."
// Hint: Look up the statement if ... in
// If the name is not in the object, console.log: "Hi! I'm a guest."

// console.log(guestList);

// let currentName = prompt("What's your name? ").toLowerCase()

// if(guestList.hasOwnProperty(currentName) ){
//     console.log(`Hi! I'm ${currentName}, and I'm from  ${guestList[currentName]}.`)
// }else{
//     console.log("Hi! I'm a guest.")
// }

//--------------------------------
// Exercise 5: Repeat the Question
//--------------------------------

// let family = {
//   luiz: "father",
//   solange: "mother",
//   mariana: "sister",
//   thais: "wife",
//   bob: "dog",
// }

// console.log(Object.keys(family));
// console.log(Object.values(family))'

//--------------------------------
// Exercise 6: 
//--------------------------------

// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }

// let keysArray = (Object.keys(details));
// console.log(keysArray);
// console.log(keysArray[0]+ " " + details.my+ " " + keysArray[1]+ " " + details.is+ " " + keysArray[2]+ " " + details.the);

//---------------------------
// Exercise 7: Secret Group
//---------------------------
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society.

// names=names.sort();
// let secretGroup='';
// for(name in names){
//     secretGroup+=names[name].charAt(0);
// }
// console.log(secretGroup);