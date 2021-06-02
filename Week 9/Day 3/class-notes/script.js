//------------------------------------
// exercise 1, combined with the HTML
//------------------------------------

// const exampleSendingPostRequest = () => {
//     const username = document.getElementById('name').value;
//     const password = document.getElementById('lastname').value;
//     let requestObject = {
//       username,
//       password,
//     }
//     console.log(requestObject);
//     fetch('https://jsonplaceholder.typicode.com/users',{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify(requestObject)
//     })
//   }


//-----------------
// exercise 2
//-----------------
// covert this code with Async and Await
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     return response.json()
//   })
//   .then(data=>{
//     console.log(data)
//   })
//   .catch(e=>{
//     console.log(e);
//   })


// const fetchUsers = async () => {
//     try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users');
//         const data = response.json();
//         return data;

//     } catch (e) {
//         console.log(e)
//     }
// }

// const callUsers = async() => {
// const users =  await fetchUsers();
// console.log(users);
// }

// console.log(callUsers());



/*
We have a tree that goes through 2 cycles of growth every year.
In the spring it doubles in height
and in the summer it increases in height by 1
(whatever measurement system you want to use).
The purpose of the function is to output the height
of the tree after a certain number of growth cycles.
If we want to know the height of the tree after 5 growth cycles,
here is how we will calculate it:
At cycle 0, the initial height of the tree is 1.
At cycle 1, the tree doubles in height so its height is now 2.
At cycle 2, the tree increases in height by 1.
The tree’s height is 3.
At cycle 3, the tree doubles in height again so its height is now 6.
At cycle 4, the tree increases in height by 1.
The tree’s height is now 7.
At the final cycle - 5- , the tree doubles in height
making the tree’s height 14.
The function will output 14.
*/

// function cycleTree(n) {
//     let cycle = 1;
//     let height = 1;
//     while (cycle <= n) {
//         if (cycle % 2 !== 0) {
//             height *= 2;
//         } else {
//             height++;
//         }
//         cycle++;
//     }
//     return height;
// }