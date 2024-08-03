import { useState, useContext } from "react"
import { UserContext } from "./context/UserContext";
import { AlertContext } from './context/AlertContext'

function SearchUser() {
  const [text, setText] = useState("")
  const {usersSearch, reset} = useContext(UserContext)
  const {setAlert} = useContext(AlertContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(text === ''){
        setAlert("Please enter username", 'error')
    } else {
        usersSearch(text)
        setText('')
    }
  }
  
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder="Search" value = {text} onChange={e=> setText(e.target.value)} />
                        <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg" type="submit">
                            Show
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div>
            <button onClick={reset} className="btn btn-ghost btn-lg">Clear</button>
        </div>
    </div>
  )
}

export default SearchUser