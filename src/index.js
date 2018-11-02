import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

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
        console.log(action.payload);
        state = action.payload 
    } else if (action.type === 'ADD_CUSTOMER') {
        console.log(action.payload);
        
        state = {...state, ...action.payload}
        //add customer to state
    } else if (action.type === 'CHECKOUT') {
        //reset state
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
