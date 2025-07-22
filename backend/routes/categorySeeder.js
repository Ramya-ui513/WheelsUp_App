import express from 'express';
import Category from '../models/category.js';

const router = express.Router();

router.get('/seed', async (req, res) => {
  const data = [
    {
      name: "Beast Crusher XL",
      category: "Monster Truck",
      description: "Jumps, smashes, and dominates.",
      imageUrl: "/images/Beast Crusher XL – Monster Truck.jpg",
    },
    {
      name: "Blaze Monster X",
      category: "Monster Truck",
      description: "High-suspension beast for wild terrains.",
      imageUrl: "/images/Blaze Monster X – Monster Truck.jpg",
    },
  ];

  await Category.deleteMany();
  const inserted = await Category.insertMany(data);
  res.status(201).json(inserted);
});

export default router;
