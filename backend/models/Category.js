import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  imageUrl: String,
});

export default mongoose.model('Category', categorySchema);
