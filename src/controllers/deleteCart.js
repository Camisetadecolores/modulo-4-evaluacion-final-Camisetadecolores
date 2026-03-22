const { getConnection } = require("../db/connection");

const deleteCart = async (req, res) => {
  try {
    const connection = await getConnection();

    await connection.query("DELETE FROM cart");

    await connection.end();

    res.redirect("/cart");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error clearing cart");
  }
};

module.exports = {
  deleteCart,
};