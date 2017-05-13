import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import {userListReducer}  from './reducers/userReducer';
import {planetReducer}  from './reducers/planetReducer'

const rootReducer = combineReducers({
  routing,
  userListReducer,
  planetReducer
   })

export default rootReducer