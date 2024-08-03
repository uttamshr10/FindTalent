function UserReducer(state, action){
    switch(action.type){
        case "GET_USERS":
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case "GET_USER":
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case "GET_REPOS":
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "RESET":
            return {
                ...state,
                users: []
            }
        default:
            return state
    }
}

export default UserReducer