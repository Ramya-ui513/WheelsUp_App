import React, { useEffect, useState } from 'react';
import './ProductPage.css';
import { useNavigate } from 'react-router-dom';
import productBackground from '../assets/productPage.jpg';
import imageMap from '../utils/imageMap';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        alert("⚠️ Couldn't load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (product) => {
    if (!username) {
      alert('⚠️ Please login to add to cart');
      navigate('/login');
      return;
    }

    try {
      const res = await fetch('http://localhost:8000/api/cart/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           productId: product._id,
           name: product.name,
           image: product.image,
           price: product.price,
           username, 
  }),
});
 

      const data = await res.json();

      if (res.ok) {
        alert('Item added to cart!');
      } else {
        console.error('Server error:', data);
        alert(`Failed: ${data.error || 'Something went wrong'}`);
      }
    } catch (err) {
      console.error('Network error:', err);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div
      className="product-page"
      style={{
        backgroundImage: `url(${productBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <h2 style={{ color: '#fff' }}>Welcome {username || 'Guest'} to WheelsUp!</h2>

      {loading ? (
        <p style={{ color: '#fff' }}>Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map((prod) => (
            <div key={prod._id} className="product-card">
              <img src={imageMap[prod.image] || prod.image} alt={prod.name} />
              <h3>{prod.name}</h3>
              <p>Price: €{prod.price}</p>
              <button onClick={() => handleAddToCart(prod)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
