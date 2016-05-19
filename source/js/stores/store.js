import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers/index';

const initialState = {};

const enhancer = compose(
  applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory)),
  window.devToolsExtension ? window.devToolsExtension() : null
);

const store = createStore(reducer, initialState, enhancer);

export default store;