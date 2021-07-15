// reference youtube tutorial by webDevSimplified => https://www.youtube.com/watch?v=PKwu15ldZ7k&t=2110s
import React, {useContext, useState, useEffect} from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export const useAuth = () => { 
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState()

    const register = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])
    
    
    const value = {
        currentUser,
        register
    }

    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )

}