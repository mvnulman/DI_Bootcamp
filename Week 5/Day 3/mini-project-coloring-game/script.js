let pleasework = false
let gridid = document.getElementById("grid")
let bg = "white"
let event;
addGrid()
//crating a grid
function addGrid() {
    for (let i = 0; i < 2440; i++) {
        let div = document.createElement("div")
        div.classList.add('smallbox');
        div.addEventListener("mousedown", bgc) 
        gridid.appendChild(div)    
    }
}
//draws the bg color
function bgc(e) {
    pleasework = true
    this.style.backgroundColor = bg
    for (let i = 0; i < 2440; i++){
        
        event = gridid.children[i].addEventListener("mouseover", hover)
    }  
}
//gets the background color
function draw(e) {          
    bg = this.style.backgroundColor
}
//after click colors where mouse goes
function hover(e) {
    if (pleasework == true){
    this.style.backgroundColor = bg
    this.addEventListener("mouseup", mouseup)
}
}
function mouseup(){
    pleasework = false
}
//btn clear
function clear(e) {
    bg = "white"
    for (let i = 0; i < 2440; i++) {
       gridid.children[i].style.backgroundColor = bg 
    } 

 }
//gets the bg color
let colors = document.body.firstElementChild.querySelectorAll("div")
for (let i = 0; i < 21; i++) {
   colors[i].addEventListener("click", draw)    
}
//btn clear
let btr = document.getElementsByTagName("button")[0] 
btr.addEventListener("click", clear)
