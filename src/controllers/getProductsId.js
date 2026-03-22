const { getConnection } = require("../db/connection.js");

const getProductsId = async (req, res) => {
    try {
    const productId = req.params.id;

    const connection = await getConnection();

    const sql = `
      SELECT * FROM products
      WHERE id = ?
    `;

    const [results] = await connection.query(sql, [productId]);

    await connection.end();

    const product = results[0];

    res.render("product-detail", { product });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error loading product");
  }
};


module.exports = {
  getProductsId,
};