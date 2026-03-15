const mysql = require("mysql2/promise");
require("dotenv").config();

// DATABASE CONNECTION
async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  await connection.connect();

  console.log(
    `Database connection established (id=${connection.threadId})`
  );

  return connection;
}

module.exports = {
  getConnection,
};