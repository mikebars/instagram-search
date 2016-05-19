import {
  RECEIVE_TAG_RESPONSE,
  RECEIVE_URL_RESPONSE,
  RESET_STATE
} from '../actions/actionTypes';

const initialState = [];

export default function results(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TAG_RESPONSE:
      return action.payload.data;
    case RECEIVE_URL_RESPONSE:
      return [].concat(state, action.payload.data);
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}