import { useEffect, useState } from "react"

function UsersList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }

    if (loading){
        return <h3>Loading...</h3>
    } else {
        return (
            <div className="text-white grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user) => (
                <h3>{user.login}</h3>
            ))}
        </div>
  )
}
}

export default UsersList