//-------------------------
// Exercise 1 : Comparison
//-------------------------
// Instructions
// Create a function called compareToTen that takes a number as an argument.
// The function should return a Promise that tests if the value of the given argument is less or greater than 10.


const compareToten = (num) => {
    let p = new Promise ((resolve, reject) => {
       if(num > 10) {
        resolve(`${num} it's greater than 10!`)

       } if(typeof(num) != 'number' || num == null || num == undefined){
        console.log('Error! Not all items in the array are numbers')
       }
       else {
           reject(`${num} is less than 10`)
       }

    })
    return p;
}

compareToten(11)
.then(res => {
    console.log(res)
})

.catch(rej => {
    console.log(rej)
})

compareToten(8)
.then(res => {
    console.log(res)
})

.catch(rej => {
    console.log(rej)
})

compareToten('String')
.then(res => {
    console.log(res)
})

.catch(rej => {
    console.log(rej)
})

//-----------------------
// Exercise 2 : Promises
//-----------------------
// Instructions
// 1- Create a promise that resolves itself in 4 seconds and returns a “success” string.
// 2- Read about Promise.resolve() and Promise.reject().


let exampleSucess = true;
const promiseLet = new Promise((resolve, reject) => {
    if(exampleSucess == true) {
        setTimeout(() => {
            resolve('Success!');
        }, 4000);
    } else {
        reject();
    }
});

promiseLet.then(values => { 
    console.log(values);
});


// 3- How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?

promiseLet.then(value => {
    setTimeout(() => {
        console.log(value);
    }, 4000)
})

// 4- Add code to catch errors and console.log ‘Ooops something went wrong’.

promiseLet.catch(error => {
    console.log('Ooops something wen2t wrong')
})


// EXERCISE 3: RESOLVE AND REJECT

// 1. Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.

let value3 = Promise.resolve(3)
value3.then(value => console.log(value))


// // 2. Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

let valueBoo = Promise.reject("Boo!")
valueBoo.catch(error => console.log(error))