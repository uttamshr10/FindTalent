import {useReducer, createContext} from 'react'
import AlertReducer from './AlertReducer'

export const AlertContext = createContext()

function AlertProvider({children}) {
   const initialState = null
   const [state, dispatch] = useReducer(AlertReducer, initialState)

   const setAlert = (msg, type) => {
    dispatch({
        type: 'SET_ALERT',
        payload: {msg, type}
    })

    setTimeout(() => dispatch({type: 'REMOVE_ALERT'}), 3000)
   }

    return (
    <AlertContext.Provider value = {{ alert:state, setAlert }}>
        {children}
    </AlertContext.Provider>
  )
}

export default AlertProvider