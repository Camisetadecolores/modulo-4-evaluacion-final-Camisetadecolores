const { getConnection } = require("../db/connection");

const createProduct = async (req, res) => {
  try {
    const { name, price, category, stock } = req.body;

    const sql = `
      INSERT INTO products (name, price, category, stock, description, image)
      VALUES (?, ?, ?, ?)
    `;

    const connection = await getConnection();
    await connection.query(sql, [name, price, category, stock, RTCSessionDescription, image]);

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