const { getConnection } = require("../db/connection.js");

const createProduct = async (req, res) => {
  try {
    const { name, price, category, stock } = req.body;

    const sql = `
      INSERT INTO products (name, price, category, stock)
      VALUES (?, ?, ?, ?)
    `;

    const connection = await getConnection();
    const [result] = await connection.query(sql, [
      name,
      price,
      category,
      stock,
    ]);

    await connection.end();

    res.json({
      success: true,
      id: result.insertId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports = {
  createProduct,
};