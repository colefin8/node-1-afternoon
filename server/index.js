const express = require("express");
// const products = require("../products.json");
const getProducts = require("./getProducts.js");
const getProduct = require("./getProduct.js");
const addProduct = require("./addProduct.js");

const app = express();

app.use(express.json());

app.get("/api/products", getProducts);

app.get("/api/products/:id", getProduct);

app.post("/api/products", addProduct);

app.listen(4040, () => console.log("Server running on port 4040"));
