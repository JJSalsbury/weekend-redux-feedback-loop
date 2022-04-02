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
const feedbackList = ( state = [], action) => {
    if (action.type === 'SET_FEEDBACK') {
        return action.payload
    }
    return state;
}

//REDUX STORE
const reduxStore = createStore(
    combineReducers({
        feedbackList
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
