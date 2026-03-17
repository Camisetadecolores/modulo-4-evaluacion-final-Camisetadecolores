const { getConnection } = require("../db/connection");

const createProduct = async (req, res) => {
  try {
    const { name, price, category, stock } = req.body;

    const sql = `
      INSERT INTO products (name, price, category, stock)
      VALUES (?, ?, ?, ?)
    `;

    const connection = await getConnection();
    await connection.query(sql, [name, price, category, stock]);

    await connection.end();

    res.redirect("/admin");
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
};

module.exports = {
  createProduct,
};