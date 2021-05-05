//----------------------------
// Exercise 1 : Move The Box
//----------------------------
// Instructions
// Move the box from left to right
// Tip: use setInterval

function myMove1() {
    let elem = document.getElementById("animate");   
    let position = 0;
    let id = setInterval(frame, 5);
    function frame() {
      if (position == 350) {
        clearInterval(id);
      } else {
        position++; 
        elem.style.top = position + 'px'; 
        elem.style.left = position + 'px'; 
      }
    }
  }

  function myMove2() {
    let elem = document.getElementById("animate");   
    let position = 350;
    let id = setInterval(frame, 5);
    function frame() {
      if (position == 0) {
        clearInterval(id);
      } else {
        position--; 
        elem.style.top = position + 'px'; 
        elem.style.left = position + 'px'; 
      }
    }
  }


//----------------------------
// Exercise 2: Drag & Drop
//----------------------------
// Instructions
// Tip : Check out this video on drag and drop
// https://www.youtube.com/watch?v=C22hQKE_32c

// Create a draggable square/box element in your HTML file.
// In your javascript file add the functionality which will allow you to drag the square/box and drop it into a larger box.

let fill = document.querySelector('.fill');
let boxes = document.querySelectorAll('.empty');

//Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//loop through the empties and call drag events
for (let empty of boxes) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragOver);
}

//Drag functions here
function dragStart () {
    // console.log('start');
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEnd () {
    // console.log('end');
    this.className = 'fill';

}

function dragOver (e) {
    e.preventDefault();
}

function dragEnter (e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave () {
    this.className = 'empty';
}

function dragDrop () {
    this.className = 'empty';
    this.append(fill);

}