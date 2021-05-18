// let inventory = [
//     { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//     { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//     { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//     { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
//     { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
//   ];


// Create a function getCarHonda(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)

//The function should loop through the array of object and return the first car with the name “Honda*.
// then, return a string in the format This is a {car_make} {car_model} from {car_year}.

// const car_makers = inventory.map(elem => {
//     return elem.car_make
// }) 

// const honda = inventory.find( ({ car_make }) => car_make === 'Honda' );
// console.log(`This is a ${honda.car_make} ${honda.car_model} from ${honda.car_year}`)


// PART II
// Create a function sortCarInventoryByYear(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)

// function sortCarInventoryByYear(carInventory) {
//     return carInventory.sort((a,b) => {
//         if (a.car_year > b.car_year) return 1;
//         if (a.car_year < b.car_year) return -1;
//         return 0;
//     })
// }

// console.log(sortCarInventoryByYear(inventory))