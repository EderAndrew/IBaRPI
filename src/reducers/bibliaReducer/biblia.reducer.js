const initialState = {
    booksData: [],
    book:[],
}

export default (state=initialState, action)=>{
    switch(action.type) {
        case 'SET_BOOKS':
            return {...state, booksData:action.payload}
        case 'GET_BOOK':
            return {...state, book:action.payload}
        default:
            return {...state}
    }
}