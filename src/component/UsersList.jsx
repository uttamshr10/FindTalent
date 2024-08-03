import { useContext } from "react"
import Loading from "./Loading"
import Users from "./Users"
import { UserContext } from "./context/UserContext"

function UsersList() {
    const {users, loading} = useContext(UserContext)
    
    if (loading){
        return <Loading />
    } else {
        return (
            <div className="text-white grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user) => (
                <Users key = {user.id} user = {user} />
            ))}
        </div>
  )
}
}

export default UsersList