import axios from './axiosInstance'; 

export const addToCart = async (item, username) => {
  try {
    const res = await axios.post('cart/', {
      username, 
      productId: item._id,
      name: item.name || item.product_name,
      price: item.price,
      image: item.image
    });
    return res.data;
  } catch (err) {
    console.error('Add to Cart failed:', err);
    throw err;
  }
};

export const getCartItems = async (username) => {
  try {
    const res = await axios.get('cart/items', {
      params: { username } 
    });
    return res.data;
  } catch (err) {
    console.error('Get Cart Items failed:', err);
    throw err;
  }
};

export const removeCartItem = async (itemId) => {
  try {
    const res = await axios.delete(`cart/delete/${itemId}`);
    if (res.status === 204 || res.status === 200) return true;
    throw new Error("Delete failed");
  } catch (err) {
    console.error('Remove Cart Item failed:', err);
    return false;
  }
};

export const saveAddress = async (username, addressText) => {
  try {
    const res = await axios.post('address/', {
      username, 
      address_text: addressText
    });
    return res.data;
  } catch (err) {
    console.error('Save Address failed:', err);
    return false;
  }
};

export const getAddress = async (username) => {
  try {
    const res = await axios.get('address/', {
      params: { username } 
    });
    return res.data.address_text || 'No address found';
  } catch (err) {
    console.error('Get Address failed:', err);
    return '';
  }
};
