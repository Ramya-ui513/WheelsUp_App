// models/Address.js
import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  address_text: { type: String, required: true },
});


export default mongoose.model('Address', addressSchema);
