// config/db.js
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "zaynah",      // your PostgreSQL username
    password: "1234",    // your PostgreSQL password
    database: "hellokitty", // your database name
    port: 5432
  }
});

(async () => {
  // Create tables if they don’t exist
  const hasUsers = await knex.schema.hasTable("users");
  if (!hasUsers) {
    await knex.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("email").notNullable().unique();
      table.string("username").notNullable().unique();
      table.string("first_name");
      table.string("last_name");
    });
  }

  const hasHashPwd = await knex.schema.hasTable("hashpwd");
  if (!hasHashPwd) {
    await knex.schema.createTable("hashpwd", (table) => {
      table.increments("id").primary();
      table.string("username").notNullable();
      table.string("password").notNullable();
    });
  }

  console.log("✅ PostgreSQL tables are ready.");
})();

module.exports = knex;
