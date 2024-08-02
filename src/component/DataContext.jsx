import { useState, createContext } from "react"
export const UserContext = createContext()
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

function DataContext({children}) {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const getUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    } 

    return (
    <UserContext.Provider value = {{users, loading, getUsers}}>
        {children}
    </UserContext.Provider>
  )
}

export default DataContext