import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CustomerInfo.css';
import './bootstrap.min.css';

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
            <section className="container">
                <h1>Step 2: Customer Information</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" onChange={this.handleChange} placeholder="Name" value={this.state.customer_Name} name="customer_Name" />
                    </div>
                    <div className="form-group">
                        <label>Street Address</label>
                        <input className="form-control" onChange={this.handleChange} placeholder="Street Address" value={this.state.street_address} name="street_address" />
                    </div>
                    <div className="form-group">
                    <label>City</label>
                        <input className="form-control" onChange={this.handleChange} placeholder="City" value={this.state.city} name="city" />
                    </div>
                    <div className="form-group">
                        <label>Zip</label>
                        <input className="form-control" onChange={this.handleChange} placeholder="Zip" value={this.state.zip} name="zip" />
                    </div >

                    <div className="btn-group btn-group-toggle" data-toggle="buttons" id="radio">
                        <label className="btn btn-outline-primary">
                        <input onChange={this.handleChange} type="radio" value="pickup" name="type"  id="option1" autocomplete="off" checked/>Pickup
                        </label>
                        <label className="btn btn-outline-secondary">
                        <input onChange={this.handleChange} type="radio" value="delivery" name="type" id="option2" autocomplete="off"/>Delivery
                        </label>
                    </div>

                    <div id="next">
                        <input className="btn-lg btn btn-success" type="submit" value="Next" />   
                    </div>
                </form>

            </section>
        )
    }
}

export default connect()( CustomerInfo );