/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../configs/firebase.config";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password );
    };
    //update user
    const updateUser = (name, url ) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        });
    };
    //log in
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    //sign in
    const signin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    //observer
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged( auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unsubscribe();
    }, []);
    //log out
    const logOut = () => {
        setLoading(true);
        return signOut();
    };

    const auths = { user, loading, createUser, updateUser, login, signin,logOut };

    return (
        <AuthContext.Provider value={auths}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;