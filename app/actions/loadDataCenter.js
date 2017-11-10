import * as ActionType from '../actions/actionType';

export const loadDataCenter = (api, type) =>
  (args) => (dispatch, getState) => {
    dispatch(requestData(type));
    return fetch(api, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(args)
    }).then(res => {
      return res.json()
    }).then(res => {
      if (!res.hasOwnProperty('error_name')) {
        dispatch(receiveData(type, res));
        dispatch(receiveSuccess(type))
      } else {
        dispatch(receiveError(type));
      }
      return res;
    })
  }

export const requestData = (type) => (
  {
    type: `${type}REQUEST_DATA`,
  }
);

export const receiveData = (type, res) => (
  {
    type: `${type}RECEIVE_DATA`,
    res,
  }
);

export const receiveSuccess = (type) => (
  {
    type: `${type}RECEIVE_SUCCESS`,
  }
);

export const receiveError = (type) => (
  {
    type: `${type}RECEIVE_ERROR`,
  }
);