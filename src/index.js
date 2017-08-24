import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import todoReducer from './reducers/todoReducer'
import { addTodo } from './actions/todos'
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger'

const store = createStore(todoReducer, applyMiddleware(logger))
// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


store.dispatch(addTodo("Wash Dishes"))

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));
registerServiceWorker();
