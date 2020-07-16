/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import userReducer from './login/user.reducer';

export default combineReducers({
    user: userReducer,
});
