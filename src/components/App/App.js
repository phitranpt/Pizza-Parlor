import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
// import CustomerInfo from '../CustomerInfo/CustomerInfo'
import GetPizza from '../GetPizza/GetPizza'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img alt="" src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
        <GetPizza />
      </div>
    );
  }
}

export default App;
