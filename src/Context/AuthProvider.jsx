import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup,signOut } from "firebase/auth";
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.config';




const AuthProvider = ({children}) => {

    const provider=new GoogleAuthProvider()
    const [isLoading,setLoading]=useState(true);


    const [user,setUser]=useState(null)


    const googleLogIn=()=>{
        return signInWithPopup(auth,provider)   
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
        setLoading

    }

    return <AuthContext value={authInformation}>{children}</AuthContext>
};

export default AuthProvider;