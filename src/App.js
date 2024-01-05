import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<ProductList addToCart={addToCart}/>}/>
        <Route path='/cart' element={<Cart cart={cart}/>}/>
      </Routes>
    </Router>
  );
};

export default App;







