import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';


import productRoutes from './routes/products.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
})
.catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/products', productRoutes);

import cartRoutes from './routes/cart.js';
app.use('/api/cart', cartRoutes);
import addressRoutes from './routes/address.js';

app.use('/api/address', addressRoutes); 
import emailRoutes from './routes/email.js';
app.use('/api/email', emailRoutes);
