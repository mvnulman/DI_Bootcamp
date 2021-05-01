let div = document.getElementsByTagName("div")[0];

for (i = 0; i < 100; i++) {
    let newP = document.createElement("div");
    newP.style.width = "100px";
    newP.style.height = "100px";
    newP.style.backgroundColor = "green";

    newP.style.margin = "10%";
    newP.classList.add()
    newP.setAttribute('class', 'big');
    div.appendChild(newP);
    console.log(i);
  }
  


// console.log(div);

// let list = document.getElementsByClassName("list");
// console.log(list[0].innerHTML);

// for (i of list) {
//   let ulChild = i.children;
//   for (child of ulChild) {
//     console.log(child);
//   }
// }

// // alert('TEST TEST TEST');

// let pete = document.getElementById('pete');

// // delete an element
// // pete.remove()

// // To target the clothes parent of an element
// console.log(pete.closest('ul'));

// // let newP = document.createElement("p");
// // newP.textContent = "Hello I am inside the div";
// // // Same
// // // newP.innerHTML = "Hello I am inside the div";

// // div.appendChild(newP);

