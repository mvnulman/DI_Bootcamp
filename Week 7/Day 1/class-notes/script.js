// const array = [1, 2, 10, 16];

//---------------------
//map method
//---------------------

//* Maps transform the array. This method creates a new array, without need to create one empty array with 
//our function insides. Map already create this new array, because returns something.
// Note: map() only works on arrays. It does not execute a function for an empty array.

// const mapArray = array.map((num) => {
//     return num * 2;
// })

// 2 map method, clean way:
// const mapArray = array.map(num => num * 2);

// console.log(mapArray);

//---------------------
//filter method
//---------------------
//* As same as map method, we need to use 'return' to return something.

// const filterArray = array.filter (num => {
//     return num > 5
// })

// 2 filter method, clean way:
// const filterArray = array.filter (num =>  num > 5);

// console.log(filterArray);


//---------------------
// Reduce method
//---------------------

//Uses two parameters: accumulator is 
//Needs to return something too
// const reduceArray = array.reduce((accumulator, num)=> {
//     return accumulator + num
// }, 0);

// console.log(reduceArray)



/* Exercise
* Create a function that get an array of Numbers as input
* and return a new array with all numbers multiply by 2
* For example:
* Give this array [1,2,3,4]
* result [2,4,6,8]
*/





//---------------------
// Bootcamp Classes Exercises
//---------------------

// let array1 = [1,2,3,4]

// let doubleArray = []
//  array1.forEach((num) => {
//     doubleArray.push(num * 2);
// })

// console.log(doubleArray);


// let users = ['marcos', 'thais', 'mariana']
// let email = users.map ((item) => {
//     return item + '@gmail.com'

// })

// console.log(email)

// * Exercise
// * Create an function that get an array of Numbers as input
// * and return a new array with all numbers greater than 3
// * For example:


// let array = [0,1,1,2,3,5,8]
// for (let i = 0; i > 3; i++) {
//     console.log(array);
// }


// const dragons = ['Tim', 'Johnathan', 'SSandy', 'Sarah'];
// // get all names that start with Sa / contain Sa


// const filterArray = dragons.filter (names => {
//     return names.startsWith('Sa') || names.startsWith('T')
// })

// console.log(filterArray)


// let employees = [
//     {
//         firstName: 'John',
//         lastName: 'Doe',
//         age: 27,
//         joinedDate: 'December 15, 2017'
//     },

//     {
//         firstName: 'Ana',
//         lastName: 'Rosy',
//         age: 25,
//         joinedDate: 'January 15, 2019'
//     },

//     {
//         firstName: 'Zion',
//         lastName: 'Albert',
//         age: 30,
//         joinedDate: 'February 15, 2011'
//     }
// ];

// const filterAge = employees.filter (ages => {
//     return ages.age> 26;
// })

// console.log(filterAge)




// const array = [ 2, 5, 10, 100]
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);

//Using addition assignment operator (+=)...


//-----------------
// Rest parameters
//-----------------
// function restParams (a, b, ...rest) {
//     console.log(a, b, rest);
// }

// restParams(2,3,4,5,6)

//in the rest, all the remain values that are not defined will be turn on a new array
// We can not put rest in the middle, only in the end or in the beginning


// JavaScript Instructor
// 1. add the input values to an array in every click on a button

const root = document.getElementById('root');
const input = document.getElementById('val')
const arr = [];


const addItem = () => {
    arr.push(input.value);
    display(arr);

}


// 2. console log the array in every click.

const display = (arr) => {
    console.log(arr);
}


// 3. create a function that get this array as an argument, loop this array and display the values
// on your webpage.

