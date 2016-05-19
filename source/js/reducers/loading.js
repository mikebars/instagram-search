import {
  NEW_TAG_REQUEST,
  NEW_URL_REQUEST,
  RECEIVE_TAG_RESPONSE,
  RECEIVE_URL_RESPONSE,
  RECEIVE_ERROR,
  RESET_STATE
} from '../actions/actionTypes';

const initialState = false;

export default function loading(state = initialState, action) {
  switch (action.type) {
    case NEW_TAG_REQUEST:
    case NEW_URL_REQUEST:
      return true;
    case RECEIVE_TAG_RESPONSE:
    case RECEIVE_URL_RESPONSE:
    case RECEIVE_ERROR:
      return false;
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}