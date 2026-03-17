const { getConnection } = require("../db/connection");

const addToCart = async (req, res) => {
  try {
    const productId = Number(req.body.product_id);
    const quantity = Number(req.body.quantity);

    const connection = await getConnection();

    // Check if the product exists
    const [productResults] = await connection.query(
      "SELECT * FROM products WHERE id = ?",
      [productId]
    );

    if (productResults.length === 0) {
      await connection.end();
      return res.status(404).send("Product not found");
    }

    const product = productResults[0];

    // Check if the product is already in the cart
    const [cartResults] = await connection.query(
      "SELECT * FROM cart WHERE product_id = ?",
      [productId]
    );

    if (cartResults.length > 0) {
      const currentQuantity = cartResults[0].quantity;
      const newQuantity = currentQuantity + quantity;

      if (newQuantity > product.stock) {
        await connection.end();
        return res.status(400).send("Not enough stock available");
      }

      await connection.query(
        "UPDATE cart SET quantity = ? WHERE product_id = ?",
        [newQuantity, productId]
      );
    } else {
      if (quantity > product.stock) {
        await connection.end();
        return res.status(400).send("Not enough stock available");
      }

      await connection.query(
        "INSERT INTO cart (quantity, product_id) VALUES (?, ?)",
        [quantity, productId]
      );
    }

    await connection.end();

    res.redirect("/products");
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
};

module.exports = {
  addToCart,
};