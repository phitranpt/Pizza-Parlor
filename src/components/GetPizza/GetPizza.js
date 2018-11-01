import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './GetPizza.css';

const orderPrice = (pizza) => + Number(pizza.price);

class GetPizza extends Component {
    state = {
        selectPizza: '',
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

        displayOrderTotal = () => {
            return this.state.selectPizza;
        }

        handleChange = (price) => {
            console.log('running Handle Change');
            this.setState({
              selectPizza: price,
            });
            console.log(price);
          }

        handleNextClick = () => {
            this.props.history.push('/customer-info')
          }  

  render() {
    return (
        <div>
            <p>Order Total: {this.displayOrderTotal}</p>
            {this.props.reduxState.getPizzaReducer.map(pizza => (
                <div key={pizza.id} className="card">
                    <img alt="" src={pizza.image_path} />
                    <div className="container">
                        <h3>{pizza.name}</h3>
                        <p>
                            {`
                            ${pizza.description}
                            ${pizza.price}
                            `}
                        </p>
                        <button onClick={() => this.handleChange(pizza.price)}>Add</button>
                    </div>
                </div>
            ))}
            <button onChange={this.handleNextClick}>Next</button>
        </div>
    );
  }
}
const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default connect(mapReduxStateToProps)(GetPizza);