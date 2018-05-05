import { AsyncStorage } from 'react-native'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import promiseMiddleware from 'redux-promise-middleware'
import reducers from '../reducers/';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

export default store = createStore(
  reducers,
  applyMiddleware(middleware, createLogger(), promiseMiddleware())
);