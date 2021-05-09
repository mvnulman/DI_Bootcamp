// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.

//-----------------------------------------

// #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }

//Result: a = 3
// q1();

//-----------------------------------------

//#2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }

//Result: a = 0
// console.log(a);

// //Result: a = 0
// q22();

//-----------------------------------------

//#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }

//Result = "hello";

//-----------------------------------------

//#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }

//Result = "test";
// q4();

//-----------------------------------------

//#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);
//Result = 5 and again 5

//-----------------------------------------




//-----------------------------------------
// Exercise 2 : Ternary Operator
//-----------------------------------------
// Instructions
// Using the code below :

// function winBattle(){
//     return true;
// }

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// experiencePoints()

// 1- You need to modify the function called experiencePoints()
// Create a variable called experiencePoints.

// Assign to this variable, a ternary operator (ie. change the conditional block into a ternary operator).

// function winBattle(){
//     return true;
// }

// var experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);

//-----------------------------------------
// Exercise 3 : Colors
//-----------------------------------------
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Check if this array includes the color “Violet”.
// let violetResult = colors.includes("Violet");
// console.log(violetResult);


// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Hint : Use the array methods taught in class.

// colors.forEach((element,i) => {
//     console.log(`#${i+1} choice is ${element}`)
// });

//-----------------------------------------
// Exercise 4 : Colors #2
//-----------------------------------------

// Instructions
// Using these arrays :

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];

// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class.

// color.forEach((element,i) => {
//     let colorsOrdered = (i == 0 ? ordinal[i+1]: i == 1 ? ordinal[i+1]: i == 2 ? ordinal[i+1]: ordinal[0])
//     console.log(`${i+1}${colorsOrdered} ${element}`)
// })


//-----------------------------------------
// Exercise 5 : Is It A String ?
//-----------------------------------------
// Instructions
// Write a JavaScript function that checks whether the value of an input is a string or not.

// let isString1 = "hello";
// if (typeof isString1 === "string") {
//     console.log('Variable is a string!')
// } else {
//     console.log('Variable is not a string')
// }

// let isString2 = [1,2,4,0];
// if (typeof isString2 === "string") {
//     console.log('Variable is a string!')
// } else {
//     console.log('Variable is not a string')
// }


//-----------------------------------------
// Exercise 6 : Bank Details
//-----------------------------------------
// Instructions
// In this exercise, you have to decide which type of variables you have to use:

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses - both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the expenditures, ie. the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

// let bankAmount = 0
// const vat = 0.17
// let details = ["+200", "-100", "+146", "+167", "-2900"]
// details.forEach(element => {
//     bankAmount+=parseInt(element)*(vat+1)
// });
// console.log(bankAmount)