/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import userReducer from './userReducer/user.reducer';
import youtubeReducer from './youtubeReducer/youtube.reducer';
import systemReducer from './systemReducer/sistema.reducer';
import bibliaReducer from './bibliaReducer/biblia.reducer';

export default combineReducers({
    userReducer,
    youtubeReducer,
    systemReducer,
    bibliaReducer,
});
