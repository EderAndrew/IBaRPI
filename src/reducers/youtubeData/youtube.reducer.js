/* eslint-disable prettier/prettier */
const initialState = {
    videosData: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_VIDEOSDATA':
            return { ...state, videosData:action.payload.videosData };
    }

    return state;
};
