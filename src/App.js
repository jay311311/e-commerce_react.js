import React from 'react';
import {HashRouter as Router,Switch, Route} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./compoenets/Navbar"
import ProductList from "./compoenets/ProductList"
import Details from "./compoenets/Details"
import Cart from "./compoenets/Cart"
import Default from "./compoenets/Default"
import Modal from "./compoenets/Modal"

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={ProductList}/>
        <Route path="/detail" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route  component={Default}/>        
      </Switch>
    <Modal/>

    </Router>

  );
}

export default App;
