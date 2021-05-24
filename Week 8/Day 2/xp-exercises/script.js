//-----------------------
// Exercise 1 : HTML Form
//------------------------
// Instructions
// Hint : Read about sending form data using the HTTP protocol


// Create a form like the one above. The form should contain three inputs:
// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)

// When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)

// Where will the sent data appear?
// Answer: In the URL of the website

//-------------------------
// Exercise 2 : HTML Form#2
//--------------------------
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)

// Where will the sent data appear? Hint : Look at the Network Tab
// Answer: In the body of the HTTP.


//-------------------------
// Exercise 3 : JSON Mario
//--------------------------
// Instructions

// Using this code:

let marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

// 1- Convert this JS object into a JSON object. What happens to the nested objects ?
// let marioNewObj = JSON.stringify(marioGame);
// console.log(marioNewObj)

// 2- Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
// let marioPrettyPrint = JSON.stringify(marioGame, null, 3);
// console.log(marioPrettyPrint)
//Note* When we want to pretty print our JS object into a JSON object, the third parameter needs to be an number between 1 and 10. The second parameter needs to be null if we don't have one to use as a second parameter.


// 3- Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.