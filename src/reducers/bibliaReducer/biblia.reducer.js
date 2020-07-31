const initialState = {
    booksData: [],

}

export default (state=initialState, action)=>{
    switch(action.type) {
        case 'SET_BOOKS':
            return {...state, booksData:action.payload.booksData}
        default:
            return {...state}
    }
}