//------------------------
// Exercise 1 : Analyzing
//------------------------
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------

// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];

//Output result: 
// result = ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// console.log(result);

// ------2------
// const country = "USA";

//Output result: 
// result = ['U', 'S', 'A']

// console.log([...country]);

// ------Bonus------
// let newArray = [...[,,]];

//Output result: 
// result = [undefined, undefined]
// console.log(newArray);

//------------------------
// Exercise 2 : Employees
//------------------------
// Instructions
// Using this array:

// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)

// const sayHello = users.map((item) => {
//     return "Hello" + " " + item.firstName;
// })
// console.log(sayHello)


// Using the filter() method, congratulate only the Full Stack Residents.

// const fullstack = users.filter(item => item['role'] === 'Full Stack Resident')
// let congrats = fullstack.map(item => "Congratulations, " + item["firstName"])
// console.log(congrats)

//------------------------
// Exercise 3 : Star Wars
//------------------------
// Instructions
// Using this array 
// let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.

// const reduceArray = epic.reduce((total, name)=> {
//     return total + " " + name;
// } );
// console.log(reduceArray)


// Exercise 4 : Employees #2
// Instructions
// Using this object:

// let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];
// Use the filter() method to congratulate the students that passed the course.

// let passed = student.filter(item => item["isPassed"] === true);
// let congrats = passed.map(item => "Congratulations, " + item['name'])
// console.log(congrats)