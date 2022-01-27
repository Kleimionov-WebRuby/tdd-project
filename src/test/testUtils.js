import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from '../reducers';

export const findElementByTestAttr = (wrapper, value) => wrapper.find(`[data-test='${value}']`);

export const middlewares = [ReduxThunk];
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
};
