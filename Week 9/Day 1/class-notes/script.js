//-------------
// Exercise 1:
//-------------
// Write a function compareToTen that takes a number
// as an argument and returns a Promise that tests
// if the value is less than or greater than the value 10.
// if greater resolve if not reject

// const compareToten = (num) => {
//     let p = new Promise ((resolve, reject) => {
//        if(num > 10) {
//         resolve(`${num} it's greater than 10!`)
//        } else {
//            reject(`${num} is less than 10`)
//        }

//     })
//     return p;
// }

// compareToten(10)
// .then(res => {
//     console.log(res)
// })

// .catch(rej => {
//     console.log(rej)
// })



//--------------------------------------------

//examples (promises with set interval)
// let promise1 = new Promise ((resolve, reject) => {
//     setTimeout(()=> {
//         resolve('hello promise1')
//     }, 2000)
// })

// let promise2 = new Promise ((resolve, reject) => {
//     setTimeout(()=> {
//         resolve('hello promise2')
//     }, 5000)
// })

// let promise3 = new Promise ((resolve, reject) => {
//     setTimeout(()=> {
//         resolve('hello promise2')
//     }, 7000)
// })

// Promise.all([promise1, promise2, promise3])
// .then(val => {
//     console.log(val);
// })

// .catch(err => {
//     console.log(err);
// })

//------------------------------------------------------

// Exercise 2:
// Write two functions that use Promises that you can chain!
// The first function:
// makeAllCaps(), will take in an array of words
// and capitalize them,
// and then the second function, sortWords():
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.
// examples of array:
// const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
// const complicatedArray = ['cucumber', 44, true]


// const arrayOfWords = ['apple', undefined, 'lemons', 'kiwi', 'avocado', 777, 'papaya']

// const makeAllCaps = (arr) => {
//     let p = new Promise((resolve, reject) => {
//         let newarr = arr.map(item => {
//             if(typeof(item) == 'string') {
//                 return item.toUpperCase();
//             }
//             else {
//                 reject ()
//             }
//         })
//         resolve(newarr)
//     })
//     return p;
    
// }

// makeAllCaps(arrayOfWords)
// .then(data => console.log(data))
// .catch(err => console.log('One of your items is not a string'))


// const sortWords = () => {
//     arrayOfWords.sort()
//     console.log(arrayOfWords)
// }
// sortWords(arrayOfWords);

//-------------------------------------------------------------------


// ZIV Method

// const makeAllCaps = (array) => {
//     return new Promise((resolve,reject)=>{
//       let capsArray = array.map(word=>{
//         if(typeof word == 'string'){
//           return word.toUpperCase();
//         }
//         else{
//           reject('error: Not all words in the array are strings')
//         }
//       })
//       resolve(capsArray)
//     })
//   }
//   const sortWords = (array) => {
//     return new Promise((resolve,reject) => {
//       if(array){
//         resolve(array.sort());
//       }
//       else{
//         reject('error: somthing went wrong with sorting the array')
//       }
//     })
//   }
//   const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
//   const complicatedArray = ['cucumber', 44, true]
//   makeAllCaps(complicatedArray)
//   .then(res => {
//     return sortWords(res)
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err=>{
//     console.log(err);
//   })