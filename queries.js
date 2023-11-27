const client = require('./connection.js');
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const insertQuery = {
  text: 'INSERT INTO users(id, name, age, dep) VALUES($1, $2, $3, $4)',
  // values: [user.id, user.name, user.age, user.dep]
};


module.exports={insertQuery};
console.log(client)