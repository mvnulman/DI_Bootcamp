// NESTED FOR LOOPS
for (let i = 1; i < 4; i++){
	console.log("i : ", i)
	for (let j = 10; j < 15; j++){
		console.log("j : ", j)
	}
}
// NESTED FOR LOOPS
let colors = ["blue", "yellow", "lightpink", "red"];
//go through each element
//Step 1 : console.log color
//Step 2 : console.log every letter of each color
// "blue"
// "b" "l" "u" "e"
// "yellow"
// "y" "e" "l" "l" "o" "w"
for (let indexColor = 0; indexColor < colors.length; indexColor++){
	console.log("outer loop ", colors[indexColor]) 
		// in the 1st loop : colors[0] --> blue
		// in the 2nd loop : colors[1] --> yellow
	//get the currentColor
	let currentColor = colors[indexColor];
	for (let letterIndex = 0; letterIndex < currentColor.length; letterIndex++){
		console.log("inner loop ", currentColor[letterIndex])
		//in the 1st outer loop : currentColor = blue
			//in the 1st inner loop : letterIndex = 0
				// currentColor[letterIndex] is the same as blue[0] --> "b"
			//in the 2nd inner loop : letterIndex = 1
				// currentColor[letterIndex] is the same as blue[1] --> "l"
			//in the 3rd inner loop : letterIndex = 2
				// currentColor[letterIndex] is the same as blue[2] --> "u"
			//in the 4th inner loop : letterIndex = 3
				// currentColor[letterIndex] is the same as blue[3] --> "e"
	}
}
// -----------------------
// Function
// -------------------
//syntax
//function nameFunc () {
	//code here
// }
//Declaring a function - Creating a function
function sum () {
	console.log(2+3)
}
//Call the function - Invoke the function
//syntax : nameFunc()
sum()
// --------------------
// MAKE A FUNCTION REUSABLE - PARAMETERS
// --------------------
//when I declare a function - I add the parameters between the parentheses
function sum (firstNumber, secondNumber) {
	console.log("firstNumber : ", firstNumber)
	console.log("secondNumber : ", secondNumber)
	console.log("sum: " , firstNumber+secondNumber)
}
// //when I invoke (or call) a function - I add arguments between the parentheses
sum(2, 4);
sum(20, 67);
sum(290, 679);
// parameter is like a box
// firstNumber is box waiting to be filled with values
//arguments are the values
// --------------------
//// EXERCISE
// --------------------
// students : name, age, level(beginner, advanced)
// function console.log a sentence with these data name, age, level
function checkStudent (studentName, studentAge, studentLevel) {
	console.log(`Hello ${studentName}, you are ${studentAge} 
		years old, and your level is ${studentLevel}`)
};
checkStudent("David", 30, "beginner");
checkStudent("Lea", 19, "advanced");
// EXERCISE WITH ARRAYS
function checkStudent (studentArray) {
	console.log(`Hello ${studentArray[0]}, you are ${studentArray[1]} 
		years old, and your level is ${studentArray[2]}`)
};
checkStudent(["David", 30, "beginner"]);
checkStudent(["Lea", 19, "advanced"]);
// EXERCISE WITH OBJECTS
function checkStudent (studentObject) {
	console.log(`Hello ${studentObject.name}, you are ${studentObject.age} 
		years old, and your level is ${studentObject.level}`)
};
checkStudent({name:"David", age:30, level:"beginner"});
checkStudent({name:"Lea", age:19, level:"advanced"});
// EXERCISE
//function and a conditionals
// function isenoughMoney - 
// receives 3 parameters : bankAmount, product, costProduct
// condition
	// if I have enough money, I buy the thing that I want ( I update the amount of money left in the account)
	// sentence : "I'm happy, I bought a <x>"
	// if not,
	//sentence : "I'm sad"
// call the function 3 times
// money 10000, thing: computer, cost: 200
// money 10000, thing: kitchen, cost: 30000
// money 1000, thing: camera, cost: 800
// ----------
//GLOBAL AND LOCAL SCOPE
// ---------------
//Global scope
//global variable
let username = "David"
// //Local Scope
// // if/else : local scope
// // loop: local scope
// // function: local scope
// // THE LOCAL SCOPE CAN ACCESS VARIABLES DECLARED IN THE GLOBAL SCOPE
// // THE LOCAL SCOPE CAN ACCESS GLOBAL VARIABLES
function sayHello(){
	console.log("hello " + username)
}
sayHello()
// OTHER EXAMPLE
function weather () {
	//local variable
	let weatherTLV = "sunny";
}
weather()
// // global scope
// // // THE GLOBAL SCOPE CANNOT ACCESS VARIABLES DECLARED IN THE LOCAL SCOPE
// // // THE GLOBAL SCOPE CANNOT ACCESS LOCAL VARIABLES
console.log(weatherTLV) // Uncaught ReferenceError: weatherTLV is not defined
// OTHER EXAMPLE
// //global scope
let num = 1;
// //local scope
function changeNumber(newNumber){
	num += newNumber // num = num + newNumber
}
changeNumber(3)
console.log("num : ", num) // predict the value of the num variable --> 4
// OTHER EXAMPLE 
// //global variable
let city = prompt("Where do you live ?");
// //local scope
function citySentence(){
	//local variable
	console.log(`${city} is a beautiful city`)
}
citySentence()
//------------------
// RETURN STATEMENT
// -------------
function checkBankAmount (product, costProduct) {
	//declared in the local scope 
	let bankAmount = 10000;
	bankAmount = bankAmount - costProduct;
	// step 1
	return bankAmount; // returns 7000
	// the same as saying that the function checkBankAmount = bankAmount
}
// GOAL: use the bankAmount variable in the global scope
// Step 1 : use the return statement in the function
// Step 2 : assign my function to a variable
//global variable
let moneyLeft = checkBankAmount("computer", 3000);
// let moneyLeft = result of the function
// let moneyLeft = bankAmount
// let moneyLeft = 7000
alert(`You have $${moneyLeft} left in the account`)
// I try to access it in the global scope
// I CANNOT CALL A LOCAL VARIABLE IN THE GLOBAL SCOPE
// alert(`You have $${bankAmount} left in the account`) // INCORRECT - UNDEFINED ERROR
//  ------------------
// SAME EXAMPLE WITHOUT COMMENTS
//  ------------------
function checkBankAmount (product, costProduct) {
	let bankAmount = 10000;
	bankAmount = bankAmount - costProduct;
	return bankAmount; 
}
let moneyLeft = checkBankAmount("computer", 3000);
alert(`You have $${moneyLeft} left in the account`);
//  ------------------
// EXAMPLE WITH CONDITIONALS
//  ------------------
function checkBankAmount (product, costProduct) {
	let bankAmount = 10000;
	if (bankAmount > costProduct){
		console.log(`I can buy the ${product}`)
		bankAmount = bankAmount - costProduct;
		return bankAmount;
		// console.log("NOT ACCESSED")
	} else {
		console.log(`I'm sad`);
		return bankAmount;
	}
}
let moneyLeft = checkBankAmount("computer", 3000);
console.log(`You have $${moneyLeft} left in the account`);
//  ------------------
// EXERCISE
//  ------------------
// global variable
let costApt = 1000;
function vacationAirbnbPerPerson (friendsArray) {
	let costPerPerson = costApt / friendsArray.length;
	let costPerPersonRounded = costPerPerson.toFixed(0);
	//step 1:
	return costPerPersonRounded;
}
function warnEachFriend(){
	let cost = vacationAirbnbPerPerson(["Sarah", "Leana", "Josh"]);
	console.log(`Each friend needs to pay $${cost}`)
}
warnEachFriend()
//  ------------------
//  SAME EXERCISE - A BIT MORE TRICKY
//  ------------------
let costApt = 1000;
function vacationAirbnbPerPerson (array) {
	let costPerPerson = costApt / array.length;
	let costPerPersonRounded = costPerPerson.toFixed(0);
	//step 1:
	return costPerPersonRounded;
}
function warnEachFriend (friends){
	//step 2
	let cost = vacationAirbnbPerPerson(friends);
	for (let friendName of friends) {
		console.log(`${friendName} needs to pay $${cost}`)
	}
}
warnEachFriend(["Sarah", "Leana", "Josh"]);