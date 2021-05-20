//-----------------------
// Exercise 1 : Location
//-----------------------
// Instructions
// Analyze the code below. What will be the output?


//Result:
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//-----------------------------------
// Exercise 2 : Display Student Info
//----------------------------------
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).

function displayStudentInfo(studentObject) {
    let {first, last} = studentObject;
    console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'})


//-----------------------------------
// Exercise 3: User & Id
//----------------------------------
// Instructions
// Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

let newArr = []
for (const [key, value] of Object.entries(users)) {
    newArr.push([key, value*2])
}

console.log(newArr)

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


//-----------------------------------
// Exercise 4: Person Class
//----------------------------------
// Instructions
// Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

//Result: 'object'
const member = new Person('John');
console.log(typeof member);

//-----------------------------------
// Exercise 5: Dog Class
//----------------------------------

// Instructions
// Analyze the options below.

class Dog {
    constructor(name) {
      this.name = name;
    }
  };

// Which constructor will successfully extend the Dog class?
// Result: Number 2


//   // 1
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };
  
  
//     // 2
//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };
  
  
//     // 3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };
  
  
//     // 4
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };


//--------------------------
// Exercise 6: Challenges
//--------------------------
// 1. Evaluate these (ie True or False)

// [2] === [2]
//false

// {} === {}
//false


// 2. What is the value of property “number” for each object.

const object1 = { number: 5 }; 
// Result: number: 5

const object2 = object1;
// Result: number: 5

const object3 = object2; 
// Result: number: 5

const object4 = { number: 5};
// Result: number: 5

object1.number = 4;
// Result: 4



// 3. Create a class Animal with the attributes name, type and color



// 4. Create a class Mamal that extends from the Animal class. It has a method called sound().


// 5. Create a cow that accepts a name, type and color and has a sound method that moo’s her name, type and color.

