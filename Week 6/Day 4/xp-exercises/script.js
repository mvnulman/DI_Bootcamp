//-------------------------------------------
// Exercise 1 : Function With Two Parameters
//--------------------------------------------
// Instructions

// Create a one line function that receives two numbers as parameters and returns the sum.

// {
//     sumAb = (a, b) => a + b;
//     console.log(sumAb(5, 7));
// }

//----------------------
// Exercise 2 : Closure
//----------------------
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.

// const addTo = x => y => x + y;
// var addToTen = addTo(10);
// Result: 10 + 3 = 13
// console.log (addToTen(3));


//----------------------
// Exercise 3 : Currying
//----------------------
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// Result: 30 + 1 = 31
// console.log (curriedSum(30)(1));


//----------------------
// Exercise 4 : Currying
//----------------------
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// Result: 12 + 5 = 17
// console.log(add5(12));

//----------------------
// Exercise 5 : Composing
//----------------------
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)
// Result: 1 + 5 + 10 = 16
// console.log(compose(add1, add5)(10))