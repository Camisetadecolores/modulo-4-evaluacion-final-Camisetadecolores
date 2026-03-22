const { getConnection } = require("../db/connection");

const createProduct = async (req, res) => {
  try {
    const { name, price, category, stock } = req.body;

    const description = req.body.description || "Sin descripción";
    const image = "/images/default-product.png";

    const sql = `
      INSERT INTO products (name, price, category, stock, description, image)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const connection = await getConnection();

    await connection.query(sql, [
      name,
      price,
      category,
      stock,
      description,
      image,
    ]);

    await connection.end();

    res.redirect("/admin");
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
};

module.exports = {
  createProduct,
};