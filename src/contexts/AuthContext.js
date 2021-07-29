import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        // const username = JSON.stringify(name)
        // console.log(username)
        // currentUser.updateProfile({
        //     displayName: name,
        //     photoURL: "https://example.com/jane-q-user/profile.jpg"
        // }).then(() => {
        //     // Update successful
        //     // ...
        // }).catch((error) => {
        //     // An error occurred
        //     // ...
        // }); 
        auth.createUserWithEmailAndPassword(email, password)

        currentUser.isAdmin = "false"
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email){
        return currentUser.updateEmail(email)
    }

    function updatePassword(password){
        return currentUser.updatePassword(password)
    }

    function updateName(name){
        return currentUser.updateProfile({
            displayName: name
        })
    }
    function updateProfilePicture(profilePicture){
        return currentUser.updateProfile({
            photoURL: profilePicture
        })
    }

    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])
    

    const value = {
        currentUser, 
        login,
        signup,
        logout,
        resetPassword,
        updateName,
        updateEmail,
        updatePassword,
        updateProfilePicture
    }

    return (
        <AuthContext.Provider value={value}>
            { !loading && children }
        </AuthContext.Provider>
    )
}
