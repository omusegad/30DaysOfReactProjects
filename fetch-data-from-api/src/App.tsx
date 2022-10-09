import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { UseGetProducts } from './data/api-hooks';

function App() {
  return (
    <div className="container">
      <NavBar/>
     <UseGetProducts/>
    </div>
  );
}

export default App;
