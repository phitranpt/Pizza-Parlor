import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './GetPizza.css';

class GetPizza extends Component {
    state = {
        pizzas: [{
            id: '',
            quantity: ''
        }],
    }
    
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

        // display price in 
        // displayOrderTotal = (price) => {
        //     console.log('Order Total:', price);
        //     return price;
        // }

        deletePizza = (id) => {
            axios({
              method: 'DELETE',
              url: `/api/pizza/${id}`
            })
            .then( (response) => {
                console.log('pizza id: ', response.id);
                this.props.getAllPizza();
            }) 
            .catch( (error) => {
              alert('Error in Delete', error)
            } )
          }

        // handle onClick for add pizza button
        handleChange = (id, price) => {
            console.log('running Handle Change');
            this.setState({
              pizzas: [{
                  id: id,
                  quantity: 1
              }],
              total: price
            });
            console.log(this.state);
          }

        // handle onClick for next step button
        handleNextClick = () => {
            console.log(this.state.pizzas);
            
            this.props.dispatch( {type: 'ADD_PIZZA', payload: this.state} );
            this.props.history.push('/CustomerInfo')
          }  

  render() {
    return (
        <div>
            <p>Order Total: {this.state.total}</p>
            {this.props.reduxState.getPizzaReducer.map(pizza => (
                <div id="mainBox" key={pizza.id}>
                    <div className="card">
                        <img alt="" src={pizza.image_path} />
                        <h3>{pizza.name}</h3>
                        <p>
                            {`
                            ${pizza.description}
                            ${pizza.price}
                            `}
                        </p>
                        <button id="addButton" onClick={() => this.handleChange(pizza.id, pizza.price)}>Add</button>
                        <button onClick={() => { this.deletePizza(pizza.id)}}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
            <button id="nextButton" onClick={this.handleNextClick}>Next</button>
        </div>
    );
  }
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default connect(mapReduxStateToProps)(GetPizza);