import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

class Checkout extends Component {

    checkout = () => {
        this.props.dispatch( { type:'CHECKOUT' } );
        alert('Order Sent')
        //send back to step one
        this.props.history.push('/');
    }

    render() {
        const order = this.props.reduxState.orderReducer
      return (
        <div>
          <h3>Step 3: Checkout</h3>
            <p>{order.customer_name}</p>
            <p>{order.street_address}</p>
            <p>{order.zip}</p>
            <p>For {order.type}</p>
            
          <button onClick={this.checkout}>Submit Order</button>
        </div>
      );
    }
  }

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });
  
export default connect(mapReduxStateToProps)(Checkout);