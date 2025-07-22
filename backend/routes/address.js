import express from 'express';
import Address from '../models/address.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, address_text } = req.body;

  if (!username || !address_text) {
    return res.status(400).json({ message: 'Missing username or address' });
  }

  try {
    const existing = await Address.findOne({ username });

    if (existing) {
      existing.address_text = address_text;
      await existing.save();
      return res.status(200).json({ message: 'Address updated' });
    }

    const newAddress = new Address({ username, address_text });
    await newAddress.save();
    res.status(201).json({ message: 'Address saved' });
  } catch (err) {
    console.error('Address save error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  try {
    const address = await Address.findOne({ username });
    if (address) {
      res.status(200).json({ address_text: address.address_text });
    } else {
      res.status(404).json({ message: 'Address not found' });
    }
  } catch (err) {
    console.error('Address fetch error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
