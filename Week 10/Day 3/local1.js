// localStorage.clear()

localStorage.setItem('data', 'arr')

console.log(localStorage)

let obj = {
    a: 1,
    b:2
}

localStorage.setItem('myobj', JSON.stringify(obj));