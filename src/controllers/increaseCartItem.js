const { getConnection } = require("../db/connection");

const increaseCartItem = async (req, res) => {
  try {
    const productId = req.params.productId;

    const connection = await getConnection();

    const sql = `
      UPDATE cart
      SET quantity = quantity + 1
      WHERE product_id = ?
    `;

    await connection.query(sql, [productId]);

    await connection.end();

    res.redirect("/cart");
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
};

module.exports = {
  increaseCartItem,
};