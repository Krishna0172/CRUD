const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3300;
const { client } = require('./config/connection');

app.use(express.json());
app.use(cors());

// Connect to the database once
client.connect();

app.listen(port, () => {
  console.log(`Server is now listening at port ${port}`);
});

app.get('/', (req, res) => {
  return res.status(200).send('Welcome to our FIRST PROJECT...');
});

app.use('/users', require('./routes/routes.js'));

module.exports = app;
