import React from "react";
import "./App.css";
import {Routes, Route} from 'react-router-dom'
import  ProductDetail  from './views/ProductDetail'
import Cart from './views/Cart'
import Home from './views/Home'
import News from './views/News'
import Login from './views/Login'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/product" element={ <ProductDetail/> } />
          <Route path="/news" element={ <News/> } />
          <Route path="/cart" element={ <Cart/> } />
      </Routes>
    </>
  );
}

export default App;
