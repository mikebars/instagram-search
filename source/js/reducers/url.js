import {
  NEW_TAG_REQUEST,
  NEW_URL_REQUEST,
  RECEIVE_TAG_RESPONSE,
  RECEIVE_URL_RESPONSE,
  RECEIVE_ERROR,
  RESET_STATE
} from '../actions/actionTypes';

const initialState = null;

export default function url(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TAG_RESPONSE:
    case RECEIVE_URL_RESPONSE:
      return action.payload.pagination.next_url;
    case NEW_TAG_REQUEST:
    case NEW_URL_REQUEST:
    case RECEIVE_ERROR:
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}