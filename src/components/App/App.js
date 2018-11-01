import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import GetPizza from '../GetPizza/GetPizza';
import AdminView from '../AdminView/AdminView';
import Checkout from '../Checkout/Checkout';
import Header from '../Header/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          <nav>
            <ul>
              <li><Link to="/">Order Pizza</Link></li>
              <li><Link to="/CustomerInfo">Customer Information</Link></li>
              <li><Link to="/Checkout">Checkout</Link></li>
              <li><Link to="/AdminView">AdminView</Link></li>
            </ul>
          </nav>
          <Route exact path="/" component={GetPizza} />
          <Route path="/CustomerInfo" component={CustomerInfo} />
          <Route path="/Checkout" component={Checkout} />
          <Route path="/AdminView" component={AdminView} />
        </div>
      </Router>
    );
  }
}

export default App;
