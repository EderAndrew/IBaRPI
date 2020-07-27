/* eslint-disable prettier/prettier */
const initialState = {
    date: '',
    dayMsg: '',
    pct: 0,
    imgYoutube: [],
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
        default: {
            return {...state};
        }
    }
};
