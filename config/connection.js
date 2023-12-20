const { Client, Connection } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: '5432',
  password: 'user',
  database: 'postgres',
});
console.log('Connection is Done...')
module.exports = { client };
