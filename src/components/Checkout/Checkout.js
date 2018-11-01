import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Checkout extends Component {

    checkout = () => {
        console.log('clicked checkout');

        //send order to database
        axios.post({
            url: '/api/order/',
            data: ''
        }).then( (response) => {
            //confirmation dialog
        alert('Order Sent')
        
        //send back to step one
        this.props.history.push('/????');
        }).catch( (error) => {
            console.log('error posting ');

        })

    }

    render() {
      return (
        <div>
          <h3>Step 3: Checkout</h3>
          <button onClick={this.checkout}/>
        </div>
      );
    }
  }
  
export default Checkout;