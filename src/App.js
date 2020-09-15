import React from 'react';
import {Switch, Route} from "react-router-dom"
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
      <Switch>
        <Route path="/" exact component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route  component={Default}/>        
      </Switch>


    </React.Fragment>

  );
}

export default App;
