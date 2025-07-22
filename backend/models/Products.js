import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

const Products = mongoose.model('Products', productSchema);

export default Products;
