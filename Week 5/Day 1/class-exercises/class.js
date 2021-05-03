// EVENTS - addEventListener
//STEPS
//1. Retrieve the element we want to work with
//2. Add an event to this element, and we add a callback function
//1. 
let button = document.querySelector("#pinkButton");
let h1 = document.querySelector("#greenH1");
// console.log(button);
//2. element.addEventListener(event, callback function)
// button.addEventListener("click", inform);
button.addEventListener("mouseover", inform);
button.addEventListener("mouseout", informOut);
h1.addEventListener("mouseover", inform);
h1.addEventListener("mouseout", informOut);
function inform(event){
	// button.textContent= "Hello"
	console.log(event)
	// //property type : 
	// console.log(event.type);
	// the element that I hoovering
	console.log(event.target);
	//the function will change the textcontent of the element I'm hoovering
	event.target.textContent = "HELLO";
	// increase the padding
	event.target.style.padding = "100px";
	// console.log("you clicked the button");
}
function informOut(event){
	event.target.textContent = "BYE";
	// console.log("you went out of the button");
}