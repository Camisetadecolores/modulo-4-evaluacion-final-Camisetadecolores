// IMPORTS
const express = require("express");
const cors = require("cors");
const { getConnection } = require("./db/connection.js");

//CONTROLLERS
const { getProducts } = require("./controllers/getProducts.js");
const { createProduct } = require("./controllers/createProducts.js");
const { addToCart } = require("./controllers/addToCart.js");
const { getCart } = require("./controllers/getCart.js");

// EXPRESS APP
const app = express();

app.use(cors());
app.use(express.json());

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



