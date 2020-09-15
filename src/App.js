import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./compoenets/Navbar"
import ProductList from "./compoenets/ProductList"
import Details from "./compoenets/Details"
import Cart from "./compoenets/Cart"
import Default from "./compoenets/Default"

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <ProductList/>
      <Details/>
      <Cart/>
      <Default/>
    </React.Fragment>

  );
}

export default App;
