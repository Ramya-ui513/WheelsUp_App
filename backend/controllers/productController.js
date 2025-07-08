const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().limit(6); 
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
