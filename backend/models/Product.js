import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  price: Number,
});

export default mongoose.model('Product', productSchema);
