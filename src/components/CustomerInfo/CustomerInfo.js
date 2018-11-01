import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptyCustomerObject = {
    customer_Name: '',
    street_address: '',
    city: '',
    zip: '',
    total: '',
    type: ''
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
        this.props.dispatch({ type: 'ADD_CUSTOMER', payload: this.state})
        this.props.history.push('/Checkout')
        this.clearCustomerFields();
    }

    //clear input fields
    clearCustomerFields = () => {
        this.setState( emptyCustomerObject );
    }

    render () {
        return (
            <section>
                <h1>Step 2: Customer Information</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} placeholder="Name" value={this.state.customer_Name} name="customer_Name" />
                    <input onChange={this.handleChange} placeholder="Street Address" value={this.state.street_address} name="street_address" />
                    <input onChange={this.handleChange} placeholder="City" value={this.state.city} name="city" />
                    <input onChange={this.handleChange} placeholder="Zip" value={this.state.zip} name="zip" /><br></br>
                    <input onChange={this.handleChange} type="radio" value="pickup" name="type" />Pickup<br></br>
                    <input onChange={this.handleChange} type="radio" value="delivery" name="type" />Delivery<br></br>
                    <input type="submit" value="Next" />
                </form>

                <h2>Total:</h2>
            </section>
        )
    }
}

export default connect()( CustomerInfo );