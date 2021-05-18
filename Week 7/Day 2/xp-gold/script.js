//--------------------------------------
// Exercise 1 : Analyzing The Map Method
//---------------------------------------
// Instructions
// Analyze this code, what will be the output ?

// [1, 2, 3].map(num => {
//   if (typeof num === 'number') return num * 2;
//   return ;
// });

//Output result: 
// it will return a value only if it assigned into a variable and console.log that var.

// Exercise 2: Analyzing The Reduce Method
// Instructions
// Analyze this code, what will be the output ?

// const test = [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2],
// );

//Output result: 
// [1, 2, 0, 1, 2, 3]

// console.log(test)


//--------------------------------
// Exercise 3 : Analyze This Code
//--------------------------------
// Instructions
// Using this code:

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })
// What is the value of i ?

//Output value of i result: 
// [0, 1, 2, 3, 4, 5];


//---------------------------
// Exercise 4 : Nested Arrays
//---------------------------
// Instructions
// Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].

// const array = [[1],[2],[3],[[[4]]],[[[5]]]];

// console.log(array.flat(2));


// Bonus Try to do it on one line.
// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ].
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// const result = greeting.flatMap(function(greeting){
//     return greeting + " "
// })
// console.log(result)

// Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.

// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

