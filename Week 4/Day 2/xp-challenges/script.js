//----------------------------
// Exercise 1 : Information
//----------------------------
// Instructions
// Part I

// 1- Create a function called infoAboutMe() that takes no parameter.
// function infoAboutMe ();
// // 2 -The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// function infoAboutMe () {
//     console.log("My name is Marcos, I'm 30 old and I like photography!");
// }

// // 3- Call the function.
// console.log(infoAboutMe);


// Part II

// 1- Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// function infoAboutPerson (personName, personAge, personFavoriteColor);

// 2- The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// function infoAboutPerson (personName, personAge, personFavoriteColor){
//     console.log(`Your name is ${personName}, you have ${personAge} old, your favorite color is ${personFavoriteColor}`)
// }
// // 3- Call the function twice with those arguments:

// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


// Part III

// 1- Add a parameter personHobbies to the function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies).
// function infoAboutPerson (personName, personAge, personFavoriteColor, personHobbies);

// 2- The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// function infoAboutPerson (personName, personAge, personFavoriteColor, personHobbies){
//     console.log(`Your name is ${personName}, you have ${personAge} old, your favorite color is ${personFavoriteColor} and your hobbies are: ${personHobbies}`)
// }

// 3- console.log the person’s hobbies one by one (ie. loop through the array of hobbies).
// for (let i = 0; i < infoAboutPerson.length; i++) {
//     console.log(infoAboutPerson[i]);
// }


// 4- Call the function twice with those arguments:
// infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

//----------------------------
// Exercise 2 : Keyless Car
//----------------------------

// // Ask the user for their age, and save the value to a variable.
// let age = prompt("How old are you?");
// // Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.

// // if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// // if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// // if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
// function checkDriverAge(age){
//     if (age<18){
//         alert("Sorry! you are too young to drive this car. Powering off")
        
//     }else if
//         (age==18)
//         alert("Congratulations on your first year of driving. Enjoy the ride!")

//     else{
//         (age>18)
//         alert("You are old enough to driver, Powering on. Enjoy your ride!")
//     }
// }

// // Call the function.
// // Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.
// checkDriverAge(age);

//-------------------------
// Exercise 3: Odd Or Even
//------------------------
// Instructions
// Create a function called checkNumber() that takes no parameter.
// In the function, loop through numbers from 0 to 100.
// Add an if/else block
// If the number is even, console.log "the number <number> is even"
// Else, console.log "the number <number> is odd"
// Call the function

// function checkNumber (){
//     for (let i=0; i<=100; i++) {
//         // console.log(i);
//         if(i % 2 == 0){
//             console.log(`${i} is a even number!`)
//         } else {
//             console.log(`${i} is a odd number!`)
//         }
//     }
// }


// checkNumber();

//----------------------------------------------
// Exercise 4: Find The Numbers Divisible By 23
//---------------------------------------------
// Instructions
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers from 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


// function isDivisible (){
//     for (let i=0; i<=500; i++) {
//         // console.log(i);
//         if (i % 23 == 0) {
//             console.log(`${i}`)

//         }
//     }
// }

// isDivisible();

// let sum = 0;
// for (let i = 0; i < 500; i++) {
//     if (i % 23 == 0){
//         sum += i;
//     }
// }
// console.log(sum)

//------------------------------
// Exercise 5 : Amazon Shopping
//------------------------------

// Instructions
// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }

// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional

// function checkBasket(){
//     let check=prompt("item","books");
//     if(check in amazonBasket){
//         return true;
//     }
//     return false;
// }
// if (checkBasket()){
//     alert("This item is in your basket!");
// }
// else alert("The item it's not in the basket");


//------------------------------------
// Exercise 6 : What’s In My Wallet ?
//------------------------------------

// Exercise 6 : What’s In My Wallet ?
// Instructions
// Given a item price and an array representing the amount of change in your pocket, determine whether or not you can afford the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// Quarters  = 0.25
// Dimes = 0.10
// Nickels = 0.05
// Pennies = 0.01
// To illustrate:
// changeEnough([25, 20, 5, 0], 4.25) should return true, 
// since having 25 quarters, 
// 20 dimes, 
// 5 nickels 
// and 0 pennies 
// gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// Examples

// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true

// function changeEnough(arr,comparator){
// 	let totalAmount = 0,currentValue
// 	arr.forEach((element,index) => {
// 		switch (index) {
// 			case 0:
// 				currentValue = 0.25
// 			break;
// 			case 1:
// 				currentValue = 0.10
// 			break;
// 			case 2:
// 				currentValue = 0.05
// 			break;
// 			default:
// 				currentValue = 0.01
// 			break;
// 		}
// 		totalAmount += element&currentValue

// 	});

// 	return comparator-currentValue>0
// }


//-----------------------------
// Exercise 7 : Shopping List
//-----------------------------

// Add the stock and prices objects to your js file.

// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// let shoppingList = ["banana", "orange", "apple"];


// Create a function called myBill() that takes no parameters.
// function myBill() {
// }

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1

    // function myBill() {
    //     let sum=0;
    //     for (let i = 0; i < shoppingList.length; i++) {
    //         if(stock[shoppingList[i]] == 0){
    //             console.log("out of product "+shoppingList[i]);
    //             continue;
    //         }
    //         sum+=prices[shoppingList[i]];
    //         stock[shoppingList[i]]--;                
    //     }   
    //     return sum;      
    // }

    // myBill();


    