import React, { Component } from 'react';
import axios from 'axios';

class AdminView extends Component {

    getOrders = () => {
        axios.get('/api/order')
        .then((response) => {
            console.log('The orders have arrived from the GET request!', response.data);
            // this.props.dispatch({type: ALL_ORDERS, payload: response.data})
        }).catch((error) => {
            alert('Unable to GET all orders!');
        })
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Prime Pizza Orders</h1>
                </header>
                <table>
                    <thead>
                    <th>Name</th><th>Time Order Placed</th><th>Type</th><th>Cost</th>
                    </thead>
                    <tbody>
                        <tr>
                        <td></td><td></td><td></td><td></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default AdminView;