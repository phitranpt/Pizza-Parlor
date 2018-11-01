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
        const order = this.props.reduxState.orderReducer;
        const id = this.props.reduxState.orderReducer.pizza.id;
        const pizza = this.props.reduxState.getPizzaReducer[(id-1)];
        console.log(pizza);
        
      return (
        <div>
          <h3>Step 3: Checkout</h3>
            <p>{order.customer_name}</p>
            <p>{order.street_address}</p>
            <p>{order.zip}</p>
            <p>For {order.type}</p>
            <table>
                <thead><tr><th>Name</th><th>Cost</th></tr></thead>
                <tr>
                    <td>{pizza.name}</td><td>{pizza.price}</td>
                </tr>
                <caption align="bottom">Total:{order.total}</caption>
            </table>

          <button onClick={this.checkout}>Submit Order</button>
        </div>
      );
    }
  }

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });
  
export default connect(mapReduxStateToProps)(Checkout);