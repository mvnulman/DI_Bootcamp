// --------------------------------
// Exercise 1 : Change The Article
// --------------------------------

// Using DOM methods, remove the last paragraph in the <article> tag from the DOM.

let lastP = document.querySelectorAll('p')[3];
// console.log(lastP);
lastP.remove();

// Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
let h2 = document.querySelector('h2');
// console.log(h2);
h2.addEventListener('click', function () {
    h2.style.backgroundColor = 'red';
});


// Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)

function h2Result() {
    let h1Selector = document.querySelector('h1');
    // console.log(h1Selector)
    h1Selector.addEventListener('click', function () {
        h1Selector.style.fontSize = Math.floor((Math.random() * 100) + 1) + "px";
    })
}

h2Result();

// Add an event listener which will hide the h3 when it’s clicked on (use the display property).

function h3Result() {
    let h3Selector = document.querySelector('h3');
    // console.log(h3Selector);
    h3Selector.addEventListener('click', function () {
        h3Selector.style.display = 'none';
    })
}

h3Result();

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let boldButton = document.getElementById('bold-button');
// console.log(boldButton);

let allParagraphs = document.querySelectorAll('p');
// console.log(allParagraphs);

// let i;
// for(i = 0; i < allParagraphs.length; i++) {
//     allParagraphs[i].style.fontWeight = "bold";
// }

// function allParagraphsBold () {
//     for (let i = 0; i < allParagraph; i++) {
//         allParagraphs[0].style.fontWeight = "bold";
//     }
// }

boldButton.addEventListener('click', function () {
    allParagraphs[0].style.fontWeight = "bold"
});


// When the “Submit” button of the form is clicked:
// get the values of the input tags
let submitButton = document.getElementById('submit');
// console.log(submitButton);
let firstName = document.getElementById('fname');
// console.log(firstName);
let lastName = document.getElementById('lname');
// console.log(lastName);


function submitValues() {
    submitButton.addEventListener('click', function () {
        event.preventDefault()
        console.log(firstName.value);
        console.log(lastName.value);
    })
}

submitValues ();


// make sure that they are not empty,

// then append them to a HTML table, in the div, below the form.

// When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// --------------------------------
// Exercise 2 : Change The Article
// --------------------------------
// Instructions
// Add this sentence to your HTML file then follow the steps :


// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph.

getBold_items()
for (let i = 0; i < bold.length; i++) {
    bold[i].addEventListener("mouseover", highlight);
    bold[i].addEventListener("mouseout", return_normal);
}


// Create a function called highlight() that changes the color of all the bold text to blue.

function highlight(){
    for (let i = 0; i < bold.length; i++) {
     bold[i].setAttribute("style", "color: blue;")      
    }                 
 }

// Create a function called return_normal() that changes the color of all the bold text back to black.

function return_normal(){
    for (let i = 0; i < bold.length; i++) {
    bold[i].setAttribute("style", "color: black;")      
   } 
}

// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example


var bold
function getBold_items(){
    bold = document.querySelectorAll("strong")
    // console.log(bold)
}



// --------------------------------
// Exercise 3 : Volume Of A Sphere
// --------------------------------
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

let form = document.forms[0]
form.addEventListener("submit", calc)
function calc() {       
event.preventDefault()
let rad = document.getElementsByName("radius")[0].value;
let vol = document.getElementsByName("volume")[0].value;
let h1 = document.createElement("h1")   
h1.innerHTML = 3/4*vol*rad;
form.appendChild(h1)
console.log(rad)
}


// --------------------------------
// Exercise 4 : Event Listeners
// --------------------------------
// Instructions
// Add as many events listeners as possible to one element on your webpage. Each listener should do a different thing, for instance- change position x, change position y, change color, change the font size… and more.

    let p = document.getElementById('exercise4');
                
    p.addEventListener("mouseover", f1);
    p.addEventListener("click", f2);
    p.addEventListener("mouseout", f3);
    function f1() {
        this.style.backgroundColor = "yellow"
    }
    function f2() {
        this.style.color = "orange"
    }
    function f3() {
        this.setAttribute("style", "text-align: center;");
    }