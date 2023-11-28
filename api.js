const client = require('./connection.js');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getAllUsersQuery, insertUserQuery, getUserByIdQuery, updateUserQuery, deleteUserQuery } = require('./queries.js');

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3300, () => {
  console.log('Server is now listening at port 3300');
});

client.connect();

app.get('/', (req, res) => {
  return res.status(200).send('Welcome to our FIRST PROJECT...');
});

app.route('/users')
  .get((req, res) => {
    client.query(getAllUsersQuery, (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    });
  })
  .post((req, res) => {
    const user = req.body;
    const insertQuery = insertUserQuery(user);
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
    const getUserQuery = getUserByIdQuery(req.params.id);
    client.query(getUserQuery, (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    });
  })
  .put((req, res) => {
    const user = req.body;
    const updateQuery = updateUserQuery(user);
    client.query(updateQuery, (err, result) => {
      if (!err) {
        res.send('Update was successful');
      } else {
        console.log(err.message);
      }
    });
  })
  .delete((req, res) => {
    const deleteQuery = deleteUserQuery(req.params.id);
    client.query(deleteQuery, (err, result) => {
      if (!err) {
        res.send('Deletion was successful');
      } else {
        console.log(err.message);
      }
    });
  });
