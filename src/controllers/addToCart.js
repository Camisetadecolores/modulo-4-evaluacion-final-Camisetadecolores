const { getConnection } = require("../db/connection.js");

const addToCart = async (req, res) => {
  try {
    const { product_id, quantity } = req.body;

    const sql = `
      INSERT INTO cart (quantity, product_id)
      VALUES (?, ?)
    `;

    const connection = await getConnection();
    const [result] = await connection.query(sql, [quantity, product_id]);

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
  addToCart,
};