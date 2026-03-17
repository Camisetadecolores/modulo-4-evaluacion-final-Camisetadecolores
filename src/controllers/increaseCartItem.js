const { getConnection } = require("../db/connection");

const increaseCartItem = async (req, res) => {
  try {
    const productId = Number(req.params.productId);

    const connection = await getConnection();

    // 1. Get current quantity in cart
    const [cartResults] = await connection.query(
      "SELECT quantity FROM cart WHERE product_id = ?",
      [productId]
    );

    if (cartResults.length === 0) {
      await connection.end();
      return res.redirect("/cart");
    }

    const currentQuantity = cartResults[0].quantity;

    // 2. Get product stock
    const [productResults] = await connection.query(
      "SELECT stock FROM products WHERE id = ?",
      [productId]
    );

    if (productResults.length === 0) {
      await connection.end();
      return res.redirect("/cart");
    }

    const stock = productResults[0].stock;

    // 3. Check if we can increase
    if (currentQuantity >= stock) {
      // No se puede aumentar más
      await connection.end();
      return res.redirect("/cart");
    }

    // 4. Update quantity
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