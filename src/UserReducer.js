function UserReducer(state, action){
    switch(action.type){
        case "GET_USERS":
            return {
                users: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default UserReducer