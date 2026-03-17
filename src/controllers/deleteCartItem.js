const { getConnection } = require("../db/connection");

const deleteCartItem = async (req, res) => {
  try {
    const productId = req.params.productId;

    const connection = await getConnection();

    const sql = "DELETE FROM cart WHERE product_id = ?";
    await connection.query(sql, [productId]);

    await connection.end();

    res.redirect("/cart");
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
};

module.exports = {
  deleteCartItem,
};