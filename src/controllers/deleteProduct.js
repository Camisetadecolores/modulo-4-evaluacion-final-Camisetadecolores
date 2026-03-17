const { getConnection } = require("../db/connection");

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const connection = await getConnection();

    await connection.query("DELETE FROM cart WHERE product_id = ?", [productId]);
    await connection.query("DELETE FROM products WHERE id = ?", [productId]);

    await connection.end();

    res.redirect("/admin");
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
};

module.exports = {
  deleteProduct,
};