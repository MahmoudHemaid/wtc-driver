import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  auth: require('./authReducer.js').reducer,
});

export default rootReducer;
