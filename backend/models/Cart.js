import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  name: String,
  image: String,
  price: Number,
}, {
  timestamps: true,
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
