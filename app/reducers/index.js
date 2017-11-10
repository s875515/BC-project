import { combineReducers } from 'redux';

import { apiModel } from './apiModel';

import * as ActionType from '../actions/actionType';
import panelList from './panelList';

const rootReducer = combineReducers({
  panelList,
  login: apiModel(ActionType.account.LOGIN),
  selectCompany: apiModel(ActionType.account.SELECT_COMPANY)
  // category: apiModel()
});

export default rootReducer;
