const { client } = require('../config/connection');
const {
  getAllUsersQuery,
  insertUserQuery,
  getUserByIdQuery,
  updateUserQuery,
  deleteUserQuery,
} = require('../queries');

const getallQueries = async (req, res) => {
  try {
    const result = await client.query(getAllUsersQuery);
    res.send(result.rows);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Internal Server Error');
  }
};

const getByIdQuery = async (req, res) => {
  try {
    const getUserQuery = getUserByIdQuery(req.params.id);
    const result = await client.query(getUserQuery);
    res.send(result.rows);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Internal Server Error');
  }
};

const insertQuery = async (req, res) => {
  try {
    const user = req.body;
    const insertQuery = insertUserQuery(user);
    await client.query(insertQuery);
    res.send('Insertion was successful');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
};

const updateQuery = async (req, res) => {
  try {
    const user = req.body;
    const updateQuery = updateUserQuery(user);
    await client.query(updateQuery);
    res.send('Update was successful');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
};

const deletequery = async (req, res) => {
  try {
    const deleteQuery = deleteUserQuery(req.params.id);
    await client.query(deleteQuery);
    res.send('Deletion was successful');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getallQueries,
  insertQuery,
  getByIdQuery,
  updateQuery,
  deletequery,
};
