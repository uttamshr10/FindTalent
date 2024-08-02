import { useEffect, useContext } from "react"
import Loading from "./Loading"
import User from "./User"
import { UserContext } from "./DataContext"

function UsersList() {
    const {users, loading, getUsers} = useContext(UserContext)
    useEffect(()=>{
        getUsers()
    }, [])


    if (loading){
        return <Loading />
    } else {
        return (
            <div className="text-white grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user) => (
                <User key = {user.id} user = {user} />
            ))}
        </div>
  )
}
}

export default UsersList