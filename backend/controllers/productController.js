const Product = require('../models/Products.js');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.find().limit(6);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
