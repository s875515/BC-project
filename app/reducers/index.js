import panel from './panel.js'
import category from './category.js'
import page from './page.js'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  panel,
  category,
  page
});

export default rootReducer;
