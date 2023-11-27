const client = require('./connection.js');
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3300, () => {
  console.log("Server is now listening at port 3300");
});

client.connect();

app.get('/', (req, res) => {
    return res.status(200).send('Welcome to our FIRST PROJECT...');
});

app.route('/users')
  .get((req, res) => {
    client.query('SELECT * FROM users order by id asc', (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
  })
  .post((req, res) => {
    const user = req.body;
    let insertQuery = `INSERT INTO users(id, name, age, dep) VALUES (${user.id}, '${user.name}', '${user.age}', '${user.dep}')`;
    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion was successful');
        } else {
            console.log(err.message);
            res.status(500).send('Internal Server Error');
        }
    });
  });

app.route('/users/:id')
  .get((req, res) => {
    client.query(`SELECT * FROM users WHERE id=${req.params.id}`, (err, result) => {
        if (!err){
            res.send(result.rows);
        }
    });
  })
  .put((req, res) => {
    let user = req.body;
    let updateQuery = `UPDATE users SET name='${user.name}', age ='${user.age}' , dep ='${user.dep}'  WHERE id=${user.id}`;
    client.query(updateQuery, (err, result) => {
        if (!err){
            res.send('Update was successful');
        } else {
            console.log(err.message);
        }
    });
  })
  .delete((req, res) => {
    let deleteQuery = `DELETE FROM users WHERE id=${req.params.id}`;
    client.query(deleteQuery, (err, result) => {
        if (!err){
            res.send('Deletion was successful');
        } else {
            console.log(err.message);
        }
    });
  });