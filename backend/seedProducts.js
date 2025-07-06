const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");

  return Product.insertMany([
    {
      name: "Twin Mill III",
      description: "Iconic Hot Wheels model with dual engines.",
      imageUrl: "/images/Product 1.png",
      price: 19.99,
      category: "Racers"
    },
    {
      name: "Bone Shaker",
      description: "Classic skull-themed street rod.",
      imageUrl: "/images/Product 2.jpg",
      price: 14.99,
      category: "Classics"
    },
    {
      name: "Roger Dodger",
      description: "Muscle car with raw V8 power.",
      imageUrl: "/images/Product 3.png",
      price: 17.99,
      category: "Muscle"
    }
  ]);
})
.then(() => {
  console.log("Sample products inserted");
  mongoose.disconnect();
})
.catch(err => {
  console.error("Error inserting products:", err);
  mongoose.disconnect();
});
