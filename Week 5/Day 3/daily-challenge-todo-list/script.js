let listTasks = [];

loadEvents();
// load every event in the page
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
}
// subit data function
function submit(e){
  e.preventDefault();
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

// add tasks
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.listTasks').style.display = 'block';
}

function validateForm(){
  let validation = document.forms["myForm"]["task"].value;
  if (validation == "") {
    alert ("New task name needed!");
  }
}
