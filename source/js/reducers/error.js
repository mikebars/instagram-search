import { RECEIVE_ERROR, RESET_STATE } from '../actions/actionTypes';

const initialState = null;

export default function error(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ERROR:
      return action.payload;
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}