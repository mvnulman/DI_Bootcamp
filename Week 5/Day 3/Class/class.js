//-----------------------------
// setTimeout
//-----------------------------
// Anonymous function in addEventListener
// function sayHi(){
// 	console.log("hi")
// }
// button.addEventListener("click", sayHi)
// // The same as ----
// button.addEventListener("click", 
// 	function(){
// 		console.log("hello")
// 	}
// )
// //Settimeout
// function sayHi() {
// 	let div = document.createElement("div")
// 	let text = document.createTextNode("hello user")
// 	div.appendChild(text);
// 	document.body.appendChild(div);
//   	// alert("hello")
// }
// setTimeout(sayHi, 3000);
// // Other example
// let button = document.getElementById("pinkButton");
// function openPopup(){
// 	alert("Popup after 2000ms");
// }
// button.addEventListener("click", 
// 	function(){
//   		setTimeout(openPopup, 2000);
//   	}
// )
// //-----------------------------
// // Several functions & parameters
// //-----------------------------
// function sayHi(user) {
// 	let div = document.createElement("div")
// 	let text = document.createTextNode(`Hello ${username}`)
// 	div.appendChild(text);
// 	document.body.appendChild(div);
// }
// setTimeout(sayHi, 1000, "David");
// // ----------------------------
// let button = document.getElementById("pinkButton");
// function openPopup(usercity){
// 	console.log(` After 3 sec - You live in ${usercity}`);
// 	let div = document.getElementById("displayCity");
// 	div.textContent = ` After 3 sec - You live in ${usercity}`
// }
// function callPopup(){
// 	console.log("callPopup")
// 	let city = prompt("Where do you live ?")
// 	// steps as soon as the user answered "TLV"
// 	//the function openPopup will be called after 3 SEC with the argument "TLV"
// 	setTimeout(openPopup, 3000, city)
// }
// button.addEventListener("click", callPopup)
// //-----------------------------
// // Several timeout
// //-----------------------------
// let button = document.getElementById("pinkButton");
// function changeColor(){
// 	console.log(` After 1 sec - second timeout`)
// 	button.style.border = "3px solid red"
// }
// function openPopup(usercity){
// 	let div = document.getElementById("displayCity");
// 	div.textContent = ` After 3 sec - You live in ${usercity}`
// 	setTimeout(changeColor, 3000)
// }
// function callPopup(){
// 	console.log("callPopup")
// 	let city = prompt("Where do you live ?")
// 	setTimeout(openPopup, 3000, city)
// }
// button.addEventListener("click", callPopup)

//--------------------------------------------------
// Timer explanation
//--------------------------------------------------

// retrieve the inputs:
let button = document.getElementById("pinkButton");
let stopBtn = document.getElementById("greenButton");
let input = document.getElementById("capital");

//here it's to retrieve the clear variable that will be used to stop
let intervalID;


// the function starts here (Check the answer)
function checkAnswer(){
	if (input.value === "paris"){
		clearInterval(interval);
		alert("you won")
    }
}


function startTimer(){
    let sec = 30;
    intervalID = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        console.log(sec)
        sec--;
        if (sec < 0) {
            clearInterval(intervalID);
            console.log("you lost")
        }
    }, 1000);
}


