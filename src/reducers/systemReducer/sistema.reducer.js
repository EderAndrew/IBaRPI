/* eslint-disable prettier/prettier */
const initialState = {
    date: '',
    dayMsg: '',
    pct: 0,
    login: false,
    toogle_verses: false
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'SET_DATE':
            return {...state, date:action.payload.date};
        case 'SET_DAYMSG':
            return {...state, dayMsg:action.payload.dayMsg};
        case 'SET_PCT':
            return {...state, pct:action.payload.pct};
        case 'GET_IMGYOUTUBE':
            return {...state, imgYoutube:action.payload}
        case 'SET_LOGIN':
            return { ...state, login: action.payload.login }
        case 'SET_VERSES':
            return { ...state, toogle_verses: action.payload.toogle_verses }
        default: {
            return {...state};
        }
    }
};
