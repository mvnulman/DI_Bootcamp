// Instructions

// Create a form with two fields (name, last name) and a submit button.

// When you click the Send button, send the data as JSON.

const fName = document.getElementById('fname');
// console.log(fName)
const lName = document.getElementById('lname');
// console.log(lName)
const btnSend = document.getElementById('submit')
// console.log(btnSend)

btnSend.addEventListener('click', (event) => {
    event.preventDefault();
    let fullname = {"name": '', "last name": ''}
    let first = fname.value;
    let last = lname.value;
    fullname["name"] = first;
    fullname["last name"] = last;

    console.log(fullname);

    //transform the Object into an JSON
    const fullNameJson = JSON.stringify(fullname);
    console.log(fullNameJson);
})

