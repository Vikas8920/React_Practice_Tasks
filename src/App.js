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
        <Route path='/cart' element={(cart.length!=0)?<Cart cart={cart}/>:<div className='display-5 text-center mt-5'>Add items in your Cart</div>}/>
      </Routes>
    </Router>
  );
};

export default App;







