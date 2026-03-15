const { getConnection } = require("../db/connection.js");

const getProducts = async (req, res) => {
  try {
    const sql = "SELECT * FROM products";
    const connection = await getConnection();
    const [results] = await connection.query(sql);

    await connection.end();

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports = {
  getProducts,
};