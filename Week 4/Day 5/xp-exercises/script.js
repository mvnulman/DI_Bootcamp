//-------------------------------
// Exercise 1 : Change The Navbar
//-------------------------------

// 1 - In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.

let socialNetworkNavigation = document.getElementById("navBar");
// create an variable with the methods that i want, in this case, get the element by id.

socialNetworkNavigation;
// // called the variable created

socialNetworkNavigation.getAttribute('id');
// // called the variable with the method to find the value that i want. in this case, the ID value.

socialNetworkNavigation.setAttribute('id', 'socialNetworkNavigation');
// called the variable with the method to change the value of the ID, using two parameters.




// 2 - First, create a new <li> tag (use the createElement method).
let newLiItem = document.createElement('li');


// Create a new text node with “Logout” as its specified text.
let newLiText = document.createTextNode('Logout');


// Append the text node to the newly created list node (li).
newLiItem.appendChild(newLiText);


// Finally, append this updated list node to the unordered list above, using the appendChild method.
socialNetworkNavigation.firstElementChild.appendChild(newLiItem);


// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul). Display the text of each link. (Hint: use the textContent property).


//-------------------------------
// Exercise 2 : Change The Navbar
//-------------------------------
// In the HTML above change the name “Pete” to “Richard”.
let getNames = document.getElementsByClassName('list')[0].firstElementChild;
getNames.textContent = "Richard";


// Change each first name of the two <ul>'s to your name.
getNames.textContent = "Marcos";
let getNames2 = document.getElementsByClassName('list')[1].firstElementChild;
getNames2.textContent = "Marcos";


// At the end of each <ul> add a <li> that says “Hey students”.
let newListItem = document.createElement('li');
let newListText = document.createTextNode('Hey students');
newListItem.appendChild(newListText);
let newListItem2 = document.createElement('li');
let newListText2 = document.createTextNode('Hey students');
newListItem2.appendChild(newListText2);
let getListNames = document.getElementsByClassName('list')[0].lastElementChild;
let getListNames1 = document.getElementsByClassName('list')[1].lastElementChild;
getListNames.appendChild(newListItem);
getListNames1.appendChild(newListItem2);


// Delete the name Sarah from the second <ul>.
let findSarah = document.getElementsByClassName('list')[1].children[1];
findSarah.remove(document.getElementsByClassName('list')[1].children[1]);


// Bonus
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

//-------------------------------
// Exercise 3 : Users And Style
//-------------------------------
// For the following exercise use the HTML presented above:

// Add a “light blue” background color and some padding to the <div>.
let div = document.body.children[9];
div.setAttribute("style", "background-color: lightblue; padding: 15px;");

// Do not display the first name (John) in the list.
div.nextElementSibling.removeChild(div.nextElementSibling.children[1]);

// Add a border to the second name (Pete).
div.nextElementSibling.setAttribute("style","border: solid black 4px;")

// Change the font size of the whole body.
document.body.setAttribute("style", " font-size: 20px;");

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).