const { getConnection } = require("../db/connection");

const getAdministrator = async (req, res) => {
  try {
    const sql = "SELECT * FROM products ORDER BY id ASC";

    const connection = await getConnection();
    const [results] = await connection.query(sql);

    await connection.end();

    res.render("admin", { products: results });
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
};

module.exports = {
  getAdministrator,
};