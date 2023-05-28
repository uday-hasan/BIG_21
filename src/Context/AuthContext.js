import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config'
export const UserContext = createContext()
const AuthContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(currentUser)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = async (email, password) => {
        setLoading(true)
        await createUserWithEmailAndPassword(auth, email, password)
        await sendEmailVerification(auth.currentUser);
        setEmail(email)
        setPassword(password)
        console.log(email, password)

    }
    const loginUser = async (email, password) => {
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        signOut(auth)
    }


    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, user => {
    //         // if (user === null || user.emailVerified) {
    //         setCurrentUser(user)
    //         fetch('http://localhost:4000/users', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify({ email, password, user })
    //         }).then(res => res.json()).then(data => console.log(data))
    //         // }
    //         setLoading(false)
    //     })
    //     return () => unsubscribe()
    // }, [email, password])
    const value = { createUser, loginUser, currentUser, logout, loading }
    return (
        <UserContext.Provider value={value}>
            {
                children
            }
        </UserContext.Provider>
    );
};

export default AuthContext;