import express from 'express';
import Products from '../models/Products.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

export default router;
