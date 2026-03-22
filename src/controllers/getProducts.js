const { getConnection } = require("../db/connection");

const getProducts = async (req, res) => {
  try {
    const { category, sort } = req.query;

    let sql = "SELECT * FROM products";
    const params = [];

    if (category) {
      sql += " WHERE category = ?";
      params.push(category);
    }

    if (sort === "price-asc") {
      sql += " ORDER BY price ASC";
    } else if (sort === "price-desc") {
      sql += " ORDER BY price DESC";
    } else if (sort === "name-asc") {
      sql += " ORDER BY name ASC";
    } else if (sort === "name-desc") {
      sql += " ORDER BY name DESC";
    }

    const connection = await getConnection();
    const [products] = await connection.query(sql, params);
    await connection.end();

    res.render("products", {
      products,
      currentCategory: category || "all",
      currentSort: sort || "",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
};

module.exports = {
  getProducts,
};