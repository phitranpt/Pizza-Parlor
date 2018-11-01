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

// Store
const storeInstance = createStore(
    combineReducers({
      getPizzaReducer
    }),
    applyMiddleware(logger)
  )

ReactDOM.render(<Provider store={ storeInstance }><App /></Provider>, document.getElementById('root'));
