const products = require("../products.json");

const getProducts = (req, res) => {
  console.log(req.query);
  const { price } = req.query;
  if (req.query) {
    const filteredProducts = products.filter(element => {
      if (element.price >= +price) {
        return element;
      }
    });
    res.status(200).send(filteredProducts);
  } else {
    res.status(200).send(products);
  }
};

module.exports = getProducts;
