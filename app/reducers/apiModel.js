import * as ActionType from '../actions/actionType';
import { combineReducers } from 'redux';

export const apiModel = panel =>
  combineReducers({
    result: result(panel),
    isLoading: isLoading(panel),
    isSuccess: isSuccess(panel),
    isError: isError(panel)
  })

const result = (panel) => (state = [], action) => {
  // if (panel !== action.panel) return state;
  switch (action.type) {
    case ActionType.loadDataCenter.RECEIVE_DATA:
      return action.res;
    default:
      return state;
  }
}

const isLoading = (panel) => (state = false, action) => {
  // if (panel !== action.panel) return state;
  switch (action.type) {
    case ActionType.loadDataCenter.REQUEST_DATA: {
      return true;
    }
    case ActionType.loadDataCenter.RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}

const isSuccess = (panel) => (state = false, action) => {
  // if (panel !== action.panel) return state;
  switch (action.type) {
    case ActionType.loadDataCenter.RECEIVE_SUCCESS: {
      return true;
    }
    default:
      return state;
  }
}

const isError = (panel) => (state = false, action) => {
  // if (panel !== action.panel) return state;
  switch (action.type) {
    case ActionType.loadDataCenter.RECEIVE_ERROR: {
      return true;
    }
    default:
      return state;
  }
}

