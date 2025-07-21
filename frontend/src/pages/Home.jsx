import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="home-container">
      <img src="/images/hotwheels-banner.jpg" alt="Hot Wheels Banner" className="banner" />
      <div className="products">
        {products.map((product) => (
          <img key={product._id} src={product.imageUrl} alt={product.name} />
        ))}
      </div>
    </div>
  );
}

export default Home;
