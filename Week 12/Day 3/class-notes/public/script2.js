const axios = require('axios');
const fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}

fetchData();