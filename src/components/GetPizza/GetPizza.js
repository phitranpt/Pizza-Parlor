import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './GetPizza.css';


class GetPizza extends Component {

    componentDidMount() {
        this.getAllPizza();
      }
    
      getAllPizza = () => {
        // GET Pizzas from the server
        axios.get('/api/pizza') 
          .then( (response) => {
              console.log('getting Pizzas from server');
              
            this.props.dispatch( {type: 'GET_PIZZA', payload: response.data} );
          })
          .catch( (error) => {
            alert('error!!');
          })  
        }

  render() {
    return (
       <ul>
        {this.props.reduxState.getPizzaReducer.map(pizza => (
          <li key={pizza.id}>
            {`${pizza.name}
            ${pizza.description}
            ${pizza.price}
            `}
            <img alt="no image found" src={pizza.image_path} />
          </li>
        ))}
      </ul>
    );
  }
}
const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default connect(mapReduxStateToProps)(GetPizza);