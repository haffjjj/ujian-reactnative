import {combineReducers} from 'redux';

import navReducer from './nav';
import profileListReducer from './profileList'
import profileAllReducer from './profileAll'

const appReducer = combineReducers({
  nav: navReducer,
  profileListReducer,
  profileAllReducer
});

export default appReducer;