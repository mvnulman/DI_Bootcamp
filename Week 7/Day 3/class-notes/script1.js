let employees = `{
    "status":"ok",
    "employees": [
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 27,
        "joinedDate": "December 15, 2017"
    },

    {
        "firstName": "Ana",
        "lastName": "Rosy",
        "age": 25,
        "joinedDate": "January 15, 2019"
    },

    {
        "firstName": "Zion",
        "lastName": "Albert",
        "age": 30,
        "joinedDate": "February 15, 2011"
    }
]
}`;

// 1. create a button, when click on it, show the data on your webpage

const showEmployees = () => {
  let data = JSON.parse(employees);
  createElements(data.employees);
}

const searchEmployee = () => {
  let data = JSON.parse(employees)
  let arr = data.employees;
  let input = document.getElementById('search_value').value
  let filterArray = arr.filter(item => {
    return item.firstName.toLowerCase().includes()
  })
}

const createElements = (arr) => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  arr.forEach(item => {

    let div = document.createElement('DIV');

    let first = document.createElement('P');
    first.innerText = 'FIRST NAME: ' + item.firstName;
    div.classList.add('box')
    div.appendChild(first);

    let last = document.createElement('P');
    last.innerText = 'LAST NAME: ' + item.lastName;
    div.appendChild(last);

    let age = document.createElement('P');
    age.innerText = 'AGE: ' + item.age;
    div.appendChild(age);

    let date = document.createElement('P');
    date.innerText = 'DATE: ' + item.joinedDate;
    div.appendChild(date);

    root.appendChild(div)

    // console.log(item.firstName);
    // console.log(item.lastName);
    // console.log(item.age);
    // console.log(item.joinedDate);
  })
}


let filter = 

// const searchEmployee = () => {
//   let data = JSON.parse(employees);
//   let arr = data.employees;
//   let input = document.getElementById('search_value').value;
//   let filterArr = arr.filter(item => {
//     return item.firstName.toLowerCase().includes(input.toLowerCase())
//   })
//   createElements(filterArr);
















// const addItem = () => {
//   const input = document.getElementById('val').value;
//   arr.push(input);
//   console.log(arr);
// }








// const createElements = () => {
//   const i = document.createElement('input');
//   i.setAttribute('id','val');
//   i.setAttribute('type','text');
//   root.appendChild(i);
//
//   const b = document.createElement('button');
//   b.innerText = 'Add Value';
//   b.addEventListener('click', ()=>{
//     handleClick();
//   })
//   root.appendChild(b);
// }
// createElements();

//
// const handleClick = () => {
//   const i = document.getElementById('val');
//   arr.push(i.value);
//   // ['item 1', 'item 2', 'item 3']
//   // arr.map
//   // ['item 1 my great item', 'item 2 my great item', 'item 3 my great item']
//   const newArr = arr.map(item=>{
//     return `${item} my great item`;
//   })
//   displayArr(newArr);
// }
//
// const parentDiv = document.createElement('div');
// root.appendChild(parentDiv);

// const displayArr = (arr) => {
//   parentDiv.innerHTML = '';
//   arr.forEach(item => {
//     const childDiv =document.createElement('div');
//     childDiv.innerText = item;
//     parentDiv.appendChild(childDiv)
//   })
// }

// let arr1 = [{a:'item 1'}, {a:'item 2'}, {a:'item 3'}];
// console.log(arr1);
// const arr2 = arr1.map(item=>{
//   return item.a;
// });
// console.log(arr2);


// const cars = [
//   {brand:'Porshe', price:'1000000'},
//   {brand:'Audi', price:'500000'},
//   {brand:'Toyota', price:'250000'},
// ]
// const newCars = [
//   {brand:'Porshe', price:'1000000',pricePlusVat:'1170000'},
//   {brand:'Audi', price:'500000',pricePlusVat:'570000'},
//   {brand:'Toyota', price:'250000',pricePlusVat:'320000'},
// ]






// const newCars = cars.map( (item,i) => {
//   return {...item, price:i*10000, pricePlusVat: item.price * 1.17};
// })
// console.log(cars);
// console.log(newCars);


// cars.sort((a,b)=>{
//   let pa = a.brand.toLowerCase();
//   let pb = b.brand.toLowerCase();
//
//   if(pa < pb){
//     return -1;
//   }
//   if(pa > pb){
//     return 1;
//   }
//   return 0;
//
// })
// console.log(cars);
