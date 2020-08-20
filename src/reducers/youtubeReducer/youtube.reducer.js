/* eslint-disable prettier/prettier */
const initialState = {
    videosData: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_VIDEOSDATA':
            return { ...state, videosData:action.payload.videosData };
        default:
            return {...state};
    }
};
