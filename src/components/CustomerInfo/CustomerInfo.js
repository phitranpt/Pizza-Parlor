import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptyCustomerObject = {
    customer_Name: '',
    street_address: '',
    city: '',
    zip: '',
    total: ''
}

class CustomerInfo extends Component {

    state = emptyCustomerObject;

    //takes in user inputs
    handleChange = ( event ) => {
        this.setState({
            [ event.target.name ]: event.target.value,
        });
    }

    //sends user information into emptyCustomerObject array
    handleSubmit = ( event ) => {
        event.preventDefault();
        console.log('adding customer information');
        this.props.dispatch({ type: 'GET_PIZZA', payload: this.state})
    }

    clearCustomerFields

    render () {
        return (
            <form>
                <input onChange={this.handleChange} placeholder="Name" value={this.state.customer_Name} name="customer_Name" />
                <input onChange={this.handleChange} placeholder="Street Address" value={this.state.street_address} name="street_address" />
                <input onChange={this.handleChange} placeholder="City" value={this.state.city} name="city" />
                <input onChange={this.handleChange} placeholder="Zip" value={this.state.zip} name="zip" />
                <input type="submit" value="Next" />
            </form>
        )
    }
}


export default connect()( CustomerInfo );