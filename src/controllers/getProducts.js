const { getConnection } = require("../db/connection.js");

const getProducts = async (req, res) => {
  try {
    const connection = await getConnection();

    const category = req.query.category;

    let sql = "SELECT * FROM products";
    let values = [];

    if (category) {
      sql += " WHERE category = ?";
      values.push(category);
    }

    const [results] = await connection.query(sql, values);

    await connection.end();

    res.render("products", { products: results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports = {
  getProducts,
};