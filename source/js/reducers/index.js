import error from './error';
import loading from './loading';
import results from './results';
import url from './url';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const reducers = {
  error,
  loading,
  results,
  url,
  routing
};

const reducer = combineReducers(reducers);

export default reducer;