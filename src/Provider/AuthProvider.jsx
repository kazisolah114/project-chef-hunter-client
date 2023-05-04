import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/config.firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

    
    const auth = getAuth(app)
    export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser)
        }) 
        return () => {
            return unsubscribe;
        }
    }, [])
    const logOutUser = () => {
        return signOut(auth)
    }
    // Google Sign In
    const googleSignIn = () =>{
        return signInWithPopup()
    }
    const authInfo = {
        user,
        createUser,
        signInUser,
        logOutUser,
        googleSignIn
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;