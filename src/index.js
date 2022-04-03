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
const setFeeling = ( state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload
    }
    return state;
}

const setUnderstanding = ( state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload
    }
    return state;
}

const setSupport = ( state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload
    }
    return state;
}

const setComments = ( state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload
    }
    return state;
}

const setSubmit = ( state = [], action) => {
    if (action.type === 'SET_SUBMIT') {
        return action.payload
    }
    return state;
}

//REDUX STORE
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


// 

ReactDOM.render(
<Provider store={reduxStore}>
<App />
</Provider>,
document.getElementById('root'));

registerServiceWorker();
