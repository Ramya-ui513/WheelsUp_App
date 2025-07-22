import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user_email: String,
  address: String,
  items: Array,
  total: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Order', orderSchema);
