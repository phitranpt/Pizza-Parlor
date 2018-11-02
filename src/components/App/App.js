import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CustomerInfo from '../CustomerInfo/CustomerInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <CustomerInfo />
      </div>
    );
  }
}

export default App;
