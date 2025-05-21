import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut } from "firebase/auth";
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.config';




const AuthProvider = ({children}) => {

    

    const provider=new GoogleAuthProvider()
    const [isLoading,setLoading]=useState(true);


    const [user,setUser]=useState(null)


    const googleLogIn=()=>{
        return signInWithPopup(auth,provider)   
    } 

    const userRegister=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    const signout=()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        };
    }, []);

    const authInformation={
        user,
        isLoading,
        googleLogIn,
        setUser,
        signout,
        setLoading,
        userRegister,
        userLogIn

    }

    return <AuthContext value={authInformation}>{children}</AuthContext>
};

export default AuthProvider;