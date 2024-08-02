import { useReducer, createContext } from "react"
import UserReducer from "../UserReducer"
export const UserContext = createContext()

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

function DataContext({children}) {

    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)
    const loading = () => dispatch({type: 'LOADING'})
    
    // Search functionality
    const usersSearch = async (text) => {
        loading()
        const parameter = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${parameter}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const { items } = await response.json()
        dispatch({
            type:'GET_USERS',
            payload: items
        })
    }

    const reset = () =>{
        return dispatch({
            type: "RESET"
        })
    }

    return (
    <UserContext.Provider value = {{users: state.users, loading: state.loading, reset, usersSearch}}>
        {children}
    </UserContext.Provider>
  )
}

export default DataContext