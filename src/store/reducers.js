import { combineReducers } from 'redux';
import loginReducer from './user/index';

const rootReducer = combineReducers({
  user: loginReducer,
});

export default rootReducer;
