import { loadDataCenter } from './loadDataCenter';

export const addPanel = (payload) => {
  return (dispatch, getState) => {
    dispatch(loadDataCenter('https://jsonbin.org/me/categoryList'));
  }
}