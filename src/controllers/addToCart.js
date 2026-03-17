const { getConnection } = require("../db/connection");

const addToCart = async (req, res) => {
  try {
    const { product_id, quantity } = req.body;

    const connection = await getConnection();

    // Check if the product is already in the cart
    const selectSql = "SELECT * FROM cart WHERE product_id = ?";
    const [existingProduct] = await connection.query(selectSql, [product_id]);

    if (existingProduct.length > 0) {
      // If it already exists, update quantity
      const currentQuantity = existingProduct[0].quantity;
      const newQuantity = currentQuantity + Number(quantity);

      const updateSql = "UPDATE cart SET quantity = ? WHERE product_id = ?";
      await connection.query(updateSql, [newQuantity, product_id]);
    } else {
      // If it does not exist, insert new row
      const insertSql = `
        INSERT INTO cart (quantity, product_id)
        VALUES (?, ?)
      `;
      await connection.query(insertSql, [quantity, product_id]);
    }

    await connection.end();

    res.redirect("/cart");
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
};

module.exports = {
  addToCart,
};