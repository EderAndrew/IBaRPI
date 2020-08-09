const initialState = {
    booksData: [],
    book:[],
    chapter: 1,
}

export default (state=initialState, action)=>{
    switch(action.type) {
        case 'SET_BOOKS':
            return {...state, booksData:action.payload}
        case 'GET_BOOK':
            return {...state, book:action.payload}
        case 'SET_CHAPTER':
            return { ...state, chapter:action.payload.chapter }
        default:
            return {...state}
    }
}