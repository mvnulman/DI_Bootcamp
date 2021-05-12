//--------------------------
// Exercise 1: Sum Elements
//--------------------------
// Instructions
// Write a JavaScript program to find the sum of all elements in an array.
// Don’t use the sum method !


const ages = [10, 22, 66, 77]

// const ageSum = ages.reduce(function (total, age){
//     return total + age;
// }, 0)

// console.log(ageSum);

//------------------------- or with arrow function

// const ageSum = ages.reduce((total, age) =>
//     total + age, 0);

// console.log(ageSum);

//-------------------------------------------------


//-------------------------------
// Exercise 2: Remove Duplicates
//-------------------------------

// let cities = ['São Paulo', 'Tel Aviv', 'Tokyo', 'Tel Aviv', 'Buenos Aires', 'Buenos Aires']

// cities = cities.filter((value, index, arr) => arr.indexOf(value) == index);

// cities.forEach(data => console.log(data));


//----------------------------------
// Exercise 3: Remove Certain Values
//----------------------------------
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.

// let array = [NaN, 0, 15, false, -22, '',undefined, 47, null]

// array.forEach((element,i) =>{
// array = array.filter(function( element ) {
//         return element !== undefined;
//      })
//     if(!Number.isInteger(element))
//     array = array.splice(i,1)
    
// })
// console.log(array)


//----------------------------------
// Exercise 4 : Repeat Please !
//----------------------------------
// Instructions
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:

// function repeat(str, num ){
//     for (let i = 0; i < num; i++) {
//         console.log(str)      
//     }   
// }
// repeat('Ha!',3)