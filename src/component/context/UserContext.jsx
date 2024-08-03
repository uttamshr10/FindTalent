import { useReducer, createContext } from "react"
import UserReducer from "./UserReducer"
export const UserContext = createContext()

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

function UserProvider({children}) {

    const initialState = {
        users: [],
        user: {},
        repos: [],
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

    // Get single user
    const getUser = async (login) => {
        loading()
        
        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        if(response.status === 404){
            window.location = '/notfound'
        } else {
            const data = await response.json()
            dispatch({
                type:'GET_USER',
                payload: data
            })
        }
    }
    
    // Get User Repos
    const getRepos = async (login) => {
        loading()
        const parameter = new URLSearchParams({
            sort: 'latest',
            per_page: 10
        })
        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${parameter}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        dispatch({
            type:'GET_REPOS',
            payload: data
        })
    }

    const reset = () =>{
        return dispatch({
            type: "RESET"
        })
    }

    return (
    <UserContext.Provider value = {{user: state.user, users: state.users, repos: state.repos, loading: state.loading, getUser, getRepos, reset, usersSearch}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider