const fetchData = () => {


    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    fetch(`http://localhost:3000/login?user=${username}&pass=${password}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    })
}