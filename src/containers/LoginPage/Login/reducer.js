export const initialState = {
    message: 0,
    role: null,
    auth: null,
}

const loginPageReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_ROLE':
            return {
                ...state,
                role: action.userRole,}
        case 'SET_MESSAGE':
            return {
                ...state,
                message: action.pushMessage,}
        default:
            return state
    }
}

export default loginPageReducer