import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//REDUX Imports
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//REDUCERS

//Reducers 

//Created reducer
//If action type is the same as the dispatched action, this reducer will run.
//Reducer will then add the current value of state in the redux.
//If not, it will return the current state value.
const setFeeling = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload
    }
    return state;
}

//Created reducer
//If action type is the same as the dispatched action, this reducer will run.
//Reducer will then add the current value of state in the redux.
//If not, it will return the current state value.
const setUnderstanding = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload
    }
    return state;
}

//Created reducer
//If action type is the same as the dispatched action, this reducer will run.
//Reducer will then add the current value of state in the redux.
//If not, it will return the current state value.
const setSupport = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload
    }
    return state;
}

//Created reducer
//If action type is the same as the dispatched action, this reducer will run.
//Reducer will then add the current value of state in the redux.
//If not, it will return the current state value.
const setComments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload
    }
    return state;
}

//Created reducer
//If action type is the same as the dispatched action, this reducer will run.
//Reducer will then add the current value of state in the redux.
//If not, it will return the current state value.
const setSubmit = (state = [], action) => {
    if (action.type === 'SET_SUBMIT') {
        return action.payload
    }
    return state;
}

//REDUX STORE
//provides shared application state.
//Used combineReducers for multiple reducers. 
const reduxStore = createStore(
    combineReducers({
        setFeeling,
        setUnderstanding,
        setSupport,
        setComments,
        setSubmit
    }),
    applyMiddleware(logger)
);


//Provider added to set react/redux communication.
ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
