const { getConnection } = require("../db/connection.js");

const getCart = async (req, res) => {
  try {
    const sql = `
      SELECT
        cart.id,
        products.name,
        products.price,
        cart.quantity,
        (products.price * cart.quantity) AS subtotal
      FROM cart
      JOIN products ON cart.product_id = products.id
    `;

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
  getCart,
};