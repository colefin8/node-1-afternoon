const products = require("../products.json");

const getProduct = (req, res) => {
  const { id } = req.params;
  let findProduct = products.find(element => {
    return element.id === +id;
  });
  if (!findProduct) {
    return res.status(500).send("Item not in list");
  }
  res.status(200).send(findProduct);
};

module.exports = getProduct;
