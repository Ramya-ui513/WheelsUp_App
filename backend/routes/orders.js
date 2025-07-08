import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.post('/save', async (req, res) => {
  const { user_email, address, items, total } = req.body;

  try {
    const order = new Order({ user_email, address, items, total });
    await order.save();
    res.status(201).json({ message: 'Order saved!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to save order' });
  }
});

export default router;
