// IMPORTS
const express = require("express");
const cors = require("cors");
const path = require("path");
const { getConnection } = require("./db/connection.js");

//CONTROLLERS
const { getProducts } = require("./controllers/getProducts.js");
const { createProduct } = require("./controllers/createProducts.js");
const { addToCart } = require("./controllers/addToCart.js");
const { getCart } = require("./controllers/getCart.js");
const { increaseCartItem } = require("./controllers/increaseCartItem.js");
const { decreaseCartItem } = require("./controllers/decreaseCartItem.js");
const { deleteCartItem } = require("./controllers/deleteCartItem.js");
const { getAdministrator } = require("./controllers/getAdmin.js");
const { deleteProduct } = require("./controllers/deleteProduct.js");
const { updateStock } = require("./controllers/updateStock.js");

// EXPRESS APP
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// SERVER
app.listen(3000, () => console.info("API STARTED"));

// HOME
app.get("/", function(req, res) {
    res.send("TIENDA ONLINE")
})

// PRODUCTS
app.get("/products", getProducts);
app.post("/products", createProduct);

// CART
app.post("/cart", addToCart);
app.get("/cart", getCart);
app.post("/cart/increase/:productId", increaseCartItem);
app.post("/cart/decrease/:productId", decreaseCartItem);
app.post("/cart/delete/:productId", deleteCartItem);

//ADMIN
app.get("/admin", getAdministrator);
app.post("/products/delete/:id", deleteProduct);
app.post("/products/update-stock/:id", updateStock);

