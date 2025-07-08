const Product = require('../models/product');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().limit(6); // limit for featured
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
