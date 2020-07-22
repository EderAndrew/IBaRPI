/* eslint-disable prettier/prettier */
const initialState = {
    date: '',
    dayMsg: '',
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'SET_DATE':
            return {...state, date:action.payload.date};
        case 'SET_DAYMSG':
            return {...state, dayMsg:action.payload.dayMsg};
        default: {
            return {...state};
        }
    }
};
