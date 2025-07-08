const CartItem = require('../models/CartItem');

exports.addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const existingItem = await CartItem.findOne({ userId, productId });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.status(200).json({ message: 'Cart updated', item: existingItem });
    }

    const newItem = new CartItem({ userId, productId, quantity });
    await newItem.save();
    res.status(201).json({ message: 'Item added to cart', item: newItem });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const { userId } = req.params;
    const items = await CartItem.find({ userId }).populate('productId');
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    await CartItem.findByIdAndDelete(id);
    res.status(200).json({ message: 'Item removed' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
