import React, { Component } from 'react';
import axios from 'axios';

class AdminView extends Component {
state= {
    orders: [],
}
    getOrders = () => {
        axios.get('/api/order')
        .then((response) => {
            console.log('The orders have arrived from the GET request!', response.data);
            const orders = response.data;
            this.setState({orders});
        }).catch((error) => {
            alert('Unable to GET all orders!');
        })
    }

    componentDidMount() {
        this.getOrders();
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Prime Pizza Orders</h1>
                </header>
                <table>
                    <thead>
                        <tr>
                        <th>Name</th><th>Time Order Placed</th><th>Type</th><th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map(orders => (
                        <tr key={orders.id}>
                        <td>{orders.customer_name}</td><td>{orders.time}</td><td>{orders.type}</td><td>{orders.total}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AdminView;