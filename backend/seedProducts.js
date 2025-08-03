import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Products from './models/Products.js';

dotenv.config();

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Products.deleteMany();

    const products = [
      
      {
        name: "Beast Crusher XL",
        image: "BeastCrusher",
        category: "Monster Truck",
        description: "Jumps, smashes, and dominates.",
        price: 14.99,
      },
      {
        name: "Blaze Monster X",
        image: "BlazeMonster",
        category: "Monster Truck",
        description: "High-suspension beast for wild terrains.",
        price: 15.99,
      },
      {
        name: "Circuit Bullet",
        image: "CircuitBullet",
        category: "Track Champion",
        description: "Lightning-fast on sharp curves.",
        price: 11.49,
      },
      {
        name: "Desert Rover Pro",
        image: "DesertRover",
        category: "Off-Road",
        description: "Handles desert heat and dunes easily.",
        price: 13.75,
      },
      {
        name: "Hyper Drifter",
        image: "HyperDrifter",
        category: "Street Racer",
        description: "Slick for sideways action.",
        price: 12.99,
      },
      {
        name: "Mega Climb King",
        image: "MegaClimb",
        category: "Monster Truck",
        description: "Climbs like a king on rocky routes.",
        price: 15.25,
      },
      {
        name: "Nitro FURY GT",
        image: "NitroFury",
        category: "Street Racer",
        description: "Speed demon for urban races.",
        price: 14.35,
      },
      {
        name: "Sand Digger",
        image: "SandDigger",
        category: "Off-Road",
        description: "Performs like magic on sand dunes.",
        price: 13.50,
      },
      {
        name: "Street Hawk RX",
        image: "StreetHawk",
        category: "Street Racer",
        description: "Sharp steering, laser fast.",
        price: 12.00,
      },
      {
        name: "Track Blazer R1",
        image: "TrackBlazer",
        category: "Track Champion",
        description: "Smooth, stable, and track-friendly.",
        price: 11.80,
      },
      {
        name: "Track Phantom",
        image: "TrackPhantom",
        category: "Track Champion",
        description: "Built for blazing tracks and speedways.",
        price: 12.75,
      },
      {
        name: "Turbo Vortex Z9",
        image: "TurboVortex",
        category: "Street Racer",
        description: "Aerodynamic sleek racer.",
        price: 13.99,
      },
    ];

    await Products.insertMany(products);
    console.log('Products seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seedProducts();
