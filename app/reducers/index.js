import { combineReducers } from 'redux';

import { apiModel } from './apiModel';

import panelList from './panelList';

const rootReducer = combineReducers({
  panelList,
  category: apiModel()
});

export default rootReducer;
