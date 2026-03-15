// IMPORTS
const express = require("express");
const cors = require("cors");
const { getConnection } = require("./database");

// EXPRESS APP
const app = express();

app.use(cors());
app.use(express.json());

// BASIC GET
app.get("/", function (req, res) {
  res.send("WELCOME TO MY NEW API!");
});

// SERVER
app.listen(3000, () => console.info("API STARTED"));

