// fitnessApp/config/knexconnect.js

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "zaynah",          // your PostgreSQL username
    password: "1234",        // your PostgreSQL password
    database: "hellokitty",  // your PostgreSQL database
    port: 5432
  },
  pool: { min: 0, max: 10 }, // optional: controls number of connections
});

module.exports = knex;
