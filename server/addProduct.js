const products = require("../products.json");

const addProduct = (req, res) => {
  const newUser = req.body;
  products.push(newUser);
  res.status(200).send(products);
};
module.exports = addProduct;
