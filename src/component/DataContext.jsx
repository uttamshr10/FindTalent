import { useReducer, createContext } from "react"
import UserReducer from "../UserReducer"
export const UserContext = createContext()

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

function DataContext({children}) {

    const initialState = {
        users: [],
        loading: true
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)
    
    const getUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        dispatch({
            type:'GET_USERS',
            payload: data
        })
    } 

    return (
    <UserContext.Provider value = {{users: state.users, loading: state.loading, getUsers}}>
        {children}
    </UserContext.Provider>
  )
}

export default DataContext