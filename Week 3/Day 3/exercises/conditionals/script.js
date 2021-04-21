// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

// let age = parseInt(prompt("how are you"));
// console.log(typeof(age));

// if (age > 18) {
//     alert("Powering On. Enjoy the ride!");
// } else if (age === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// } else {
//     alert("Sorry, you are too young to drive this car. Powering off")
// }











// ------------Switch Case exercises---------------------//

// let fruit = 'Papayas';

// switch (fruit) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + fruit + '.');
// }

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( "Too small" );
//     break;
// if a = 3 the browser will display "Too small"

//   case 4:
//     alert( "Exactly!");
//     break;
// if a = 4 the browser will display "Exactly!"

//   case 5:
//     alert( "Too large" );
//     break;
// if a = 5 the browser will display "Too large"

//   default:
//     alert( "I don't know such values" );
// if a = 5 the browser will display "Too large"
// }


// let a = 2 + 2;

// switch (a) {
//   case 4:
//     alert('Right!');
//     break;
// // if a = 4 the display message will be "Right!"

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;
// // if a = 3 and or 5,  the browser will display two messages:
// //  first - "Wrong" and the second one will be - "Why don't you take a math class?"

//   default:
//     alert("The result is strange. Really.");
//     // if any other answer be 4, 3 and 5, the browser will display "The result is strange. Really."
// }