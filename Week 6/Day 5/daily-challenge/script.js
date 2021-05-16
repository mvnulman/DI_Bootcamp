// Instructions
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false


//---------------------------------------------
// True case
const numbersTrue = [200, 606, 777, 101, 1000]

function isOver100 (n) {
    return n > 100;
}

console.log(numbersTrue.every(isOver100));
//----------------------------------------------


//----------------------------------------------
// False case
const numbersFalse = [80, 225, 199, 1]
function isLess100 (n) {
    return n < 10;
}

console.log(numbersFalse.every(isLess100)) 

//-----------------------------------------------
