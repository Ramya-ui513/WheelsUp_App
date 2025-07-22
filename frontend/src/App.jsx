import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Categories from './pages/Categories';
import StoreLocation from './pages/StoreLocation';
import Help from './pages/Help';
import ProductsPage from './pages/ProductPage'; 
import CartPage from './pages/CartPage';        
import Navbar from './components/Navbar';
import AddAddress from './pages/AddAddress';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/store" element={<StoreLocation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/help" element={<Help />} />
        <Route path="/products" element={<ProductsPage />} /> 
        <Route path="/cart" element={<CartPage />} />  
        <Route path="/add-address" element={<AddAddress />} /> 
        <Route path="/checkout" element={<CheckoutPage />} /> 
        <Route path="/order-success" element={<OrderSuccessPage />} />    
      </Routes>
    </>
  );
};

export default App;


