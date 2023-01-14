import React from "react";
import "./App.css";
import {Routes, Route} from 'react-router-dom'
import  ProductDetail  from './views/ProductDetail'
import Cart from './views/Cart'
import Home from './views/Home'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/product" element={ <ProductDetail/> } />
          <Route path="/cart" element={ <Cart/> } />
      </Routes>
    </>
  );
}

export default App;
