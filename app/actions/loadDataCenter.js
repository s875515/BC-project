import * as ActionType from '../actions/actionType';

export const loadDataCenter = (api, panel = 'category') => {
  return (dispatch, getState) => {
    dispatch(requestData(panel));
    return fetch(api, {
      method: 'GET',
      headers: {
        "authorization": "token 5aaa7454-5b26-4205-815f-dcd1ceb7aed9",
        "content-type": "application/json",
      }
    }).then(res => {
      return res.json()
    }).then(res => {
      if (res) {
        dispatch(receiveData(panel, res));
        dispatch(receiveSuccess(panel))
      } else {
        dispatch(receiveError(panel));
      }
    })
  }
}

export const requestData = (panel) => (
  {
    type: ActionType.loadDataCenter.REQUEST_DATA,
    panel
  }
);

export const receiveData = (panel, res) => (
  {
    type: ActionType.loadDataCenter.RECEIVE_DATA,
    res,
    panel
  }
);

export const receiveSuccess = (panel) => (
  {
    type: ActionType.loadDataCenter.RECEIVE_SUCCESS,
    panel
  }
);

export const receiveError = (panel) => (
  {
    type: ActionType.loadDataCenter.RECEIVE_ERROR,
    panel
  }
);