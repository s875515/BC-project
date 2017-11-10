import * as ActionType from '../actions/actionType';
import { combineReducers } from 'redux';

export const apiModel = type =>
  combineReducers({
    result: result(type),
    isLoading: isLoading(type),
    isSuccess: isSuccess(type),
    isError: isError(type)
  })

const result = (type) => (state = [], action) => {
  switch (action.type) {
    case `${type}RECEIVE_DATA`:
      return action.res;
    default:
      return state;
  }
}

const isLoading = (type) => (state = false, action) => {
  switch (action.type) {
    case `${type}REQUEST_DATA`: {
      return true;
    }
    case `${type}RECEIVE_DATA`:
      return false;
    default:
      return state;
  }
}

const isSuccess = (type) => (state = false, action) => {
  switch (action.type) {
    case `${type}RECEIVE_SUCCESS`: {
      return true;
    }
    default:
      return state;
  }
}

const isError = (type) => (state = false, action) => {
  switch (action.type) {
    case `${type}RECEIVE_ERROR`: {
      return true;
    }
    default:
      return state;
  }
}

