import rootReducer from './reducers';
import {createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

export default (initialState) => {
  // return createStore(rootReducer, initialState);
  return applyMiddleware(thunk,logger)(createStore)(rootReducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};
