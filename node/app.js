const express = require('express');
const app = express();
const morgan = require('morgan');

const users = [
  {id: 1, name: "dali"},
  {id: 2, name: "mando"},
  {id: 3, name: "lumi"},
]

app.use(morgan('dev'))

app.get('/users', function(req, res){
  res.json(users);
})

app.post('/users', function(req, res){
  res.send('Hello world post');
})


app.listen(3000, function(){
  console.log('Server is running');
})

module.exports = app;