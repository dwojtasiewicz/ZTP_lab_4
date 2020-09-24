export const initialState = {
    bookList: null,
}

const dashboardReducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_BOOK_LIST':
            return {...state, bookList: action.bookList,}

        default:
            return state
    }
}

export default dashboardReducer;