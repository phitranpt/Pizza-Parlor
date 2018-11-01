import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import Axios from 'axios';

// GET PizzaReducer
const getPizzaReducer = (state=[ ], action) => {
    console.log('In Get Pizza Reducer');
    if (action.type === 'GET_PIZZA') {
        state = action.payload;
    }
    return state;
}

const orderReducer = (state={}, action) => {
    if (action.type === 'ADD_PIZZA') {
        //add pizzas to state
        state = action.payload 
    } else if (action.type === 'ADD_CUSTOMER') {
        state = 
        //add customer to state
    } else if (action.type === 'CHECKOUT') {
        //send state to db as order
        
        state = {};
    }
    return state
}

// Store
const storeInstance = createStore(
    combineReducers({
      getPizzaReducer,
      orderReducer
    }),
    applyMiddleware(logger)
  )

ReactDOM.render(<Provider store={ storeInstance }><App /></Provider>, document.getElementById('root'));
