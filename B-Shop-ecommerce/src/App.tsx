import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Counter from "./components/Counter";

import { UseGetProducts } from "./data/api-hooks";

function App() {

  return (
    <>
      <div className="container">
        <NavBar />
        <UseGetProducts />
      </div>
      <Counter/>
      <Footer />
    </>
  );
}

export default App;
