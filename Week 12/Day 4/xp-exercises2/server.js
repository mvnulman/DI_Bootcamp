const express = require('express');
const app = express();

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

app.use('/',express.static(__dirname+'/public'));
app.route('/index')
.get(function (req, res) {
  res.send(user)
  console.log(user)
});

app.listen(3000, () => {
  console.log('listening port 3000')
});
