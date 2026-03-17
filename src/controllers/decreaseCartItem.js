const { getConnection } = require("../db/connection");

const decreaseCartItem = async (req, res) => {
  try {
    const productId = req.params.productId;

    const connection = await getConnection();

    const selectSql = "SELECT * FROM cart WHERE product_id = ?";
    const [results] = await connection.query(selectSql, [productId]);

    if (results.length === 0) {
      await connection.end();
      return res.redirect("/cart");
    }

    const currentQuantity = results[0].quantity;

    if (currentQuantity > 1) {
      const updateSql = `
        UPDATE cart
        SET quantity = quantity - 1
        WHERE product_id = ?
      `;
      await connection.query(updateSql, [productId]);
    } else {
      const deleteSql = "DELETE FROM cart WHERE product_id = ?";
      await connection.query(deleteSql, [productId]);
    }

    await connection.end();

    res.redirect("/cart");
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
};

module.exports = {
  decreaseCartItem,
};