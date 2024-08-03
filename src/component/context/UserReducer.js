function UserReducer(state, action){
    switch(action.type){
        case "GET_USERS":
            return {
                users: action.payload,
                loading: false
            }
        case "LOADING":
            return {
                loading: true
            }
        case "RESET":
            return {
                users: []
            }
        default:
            return state
    }
}

export default UserReducer