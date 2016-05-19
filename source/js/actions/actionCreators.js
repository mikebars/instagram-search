import { createAction } from 'redux-actions';
import { push } from 'react-router-redux';

import {
  NEW_TAG_REQUEST,
  NEW_URL_REQUEST,
  RECEIVE_TAG_RESPONSE,
  RECEIVE_URL_RESPONSE,
  RECEIVE_ERROR,
  RESET_STATE
} from './actionTypes';

import {
  getResultsByTag,
  getResultsByUrl
} from '../helpers/apiHelper';

import history from '../helpers/history';

const newTagRequest = createAction(NEW_TAG_REQUEST);

const newUrlRequest = createAction(NEW_URL_REQUEST);

const receiveTagResponse = createAction(RECEIVE_TAG_RESPONSE);

const receiveUrlResponse = createAction(RECEIVE_URL_RESPONSE);

const receiveError = createAction(RECEIVE_ERROR);

export const resetState = createAction(RESET_STATE);

export const getSearchResults = function getSearchResults(tag) {
  return (dispatch) => {
    dispatch(newTagRequest(tag));
    return getResultsByTag(tag)
      .then(
        response => dispatch(receiveTagResponse(response)),
        reason => dispatch(receiveError(reason))
      );
  };
};

export const getUrlResults = function getUrlResults() {
  return (dispatch, getState) => {
    const state = getState();
    const { url } = state;
    return getResultsByUrl(url)
      .then(
        response => dispatch(receiveUrlResponse(response)),
        reason => dispatch(receiveError(reason))
      );
  }
};

export const pushLocationToHistory = function pushLocationToHistory(location) {
  return dispatch => dispatch(push(location));
};