const initialState = {
    login: false,
    toogle_verses: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'SET_LOGIN':
            return { ...state, login: action.payload.login }
        case 'SET_VERSES':
            return { ...state, toogle_verses: action.payload.toogle_verses }
        default:
            return { ...state }
    }
}