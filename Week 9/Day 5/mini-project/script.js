let spin = document.getElementById('spinner')
const func = async function () {
    spin.style.display = "block"
    try{
    
    let rnd = Math.floor(Math.random() * 80+1)
    const response = await fetch(`https://swapi.dev/api/people/${rnd}`)
    const data = await response.json()
    spin.style.display = 'none'
    html(data)  
    }catch{
        document.getElementById("name").innerHTML = "Error! try again"
    }
}
function html(data) {
    console.log(data)
    document.getElementById("name").innerHTML =`Name: ${data.name}`
    document.getElementById("height").innerHTML = `Height: ${data.height}`
    document.getElementById("gender").innerHTML = `Gender: ${data.gender}`
    document.getElementById("byear").innerHTML = `Birth Year: ${data.birth_year}`
    fetch(`${data.homeworld}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.getElementById("hworld").innerHTML = `Home World: ${data.name}`
        })
}
let but = document.getElementById("but")
but.addEventListener("click", func)