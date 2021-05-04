// In todays exercise we will be creating a Mad Libs game.

// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.


// In this exercise you will complete the functionality with event listeners.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the button is clicked.
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.


let libButton = document.getElementById('lib-button');
// console.log(libButton);

let libIt = function() {
    let li = document.querySelectorAll("input")
    console.log(li);
    let noun = li[0].value
    let adje = li[1].value
    let name = li[2].value 
    let verb = li[3].value 
    let plc = li[4].value 
    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML = `There once was a person called ${name} that loved to ${verb} on ${adje} ${plc} with ${noun}`;
};
libButton.addEventListener('click', libIt);