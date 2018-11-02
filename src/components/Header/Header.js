import React, { Component } from 'react';
import './Header.css'
import OrderTotal from '../OrderTotal/OrderTotal'

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Prime Pizza</h1>
                <OrderTotal />
            </header>
        );
    }
}

export default Header;