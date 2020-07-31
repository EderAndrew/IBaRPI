/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import userReducer from './login/user.reducer';
import youtubeReducer from './youtubeData/youtube.reducer';
import SystemReducer from './sistemaReducer/sistema.reducer';
import BibliaReducer from './bibliaReducer/biblia.reducer';

export default combineReducers({
    user: userReducer,
    y_data: youtubeReducer,
    systema: SystemReducer,
    biblia: BibliaReducer,
});
