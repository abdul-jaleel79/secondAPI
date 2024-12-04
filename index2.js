
const express = require('express');
const app = express();
const port = 8000;

const users = [
  {
    name: 'fruit',
    type: 6,
    fruit: ['apple','bannana','grapes','mango','pineapple','berry']
  },
  {
    name: 'vegetables',
    type: 5,
    vegetables: ['tomato','potato','cabbage','carrot','onion']
  },
  {
    name: 'flowers',
    type: 2,
    flowers: ['rose','orchid']
  }
];

app.get('/getallusers', (req, res) => {
  res.send(users);  
});

app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});