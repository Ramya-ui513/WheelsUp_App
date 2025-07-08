import express from 'express';
import Cart from '../models/Cart.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { username, productId, name, image, price } = req.body;

    if (!username || !productId || !name || !price) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newCartItem = new Cart({
      username,
      productId,
      name,
      image,
      price,
    });

    await newCartItem.save();
    res.status(200).json({ message: "Item added to cart" });
  } catch (err) {
    console.error("Add to Cart Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/items', async (req, res) => {
  try {
    const { username } = req.query;
    const items = await Cart.find({ username });
    res.status(200).json(items);
  } catch (err) {
    console.error("Get Cart Items Error:", err);
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    console.error("Delete Cart Item Error:", err);
    res.status(500).json({ error: "Delete failed" });
  }
});

router.delete('/clear', async (req, res) => {
  const { username } = req.query;
  if (!username) return res.status(400).json({ error: 'Username required' });

  try {
    await Cart.deleteMany({ username });
    res.status(200).json({ message: 'Cart cleared' });
  } catch (err) {
    console.error("Clear cart error:", err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default router;
