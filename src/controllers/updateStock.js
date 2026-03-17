const { getConnection } = require("../db/connection");

const updateStock = async (req, res) => {
  try {
    const productId = req.params.id;
    const { stock } = req.body;

    const connection = await getConnection();

    const sql = "UPDATE products SET stock = ? WHERE id = ?";
    await connection.query(sql, [stock, productId]);

    await connection.end();

    res.redirect("/admin");
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
};

module.exports = {
  updateStock,
};