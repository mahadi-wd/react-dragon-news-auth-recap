import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email, password)
    }

    const loginUser = (email , password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSabscribe = onAuthStateChanged(auth , (currentUser) => {
            console.log("current user right now : " , currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSabscribe
    },[])

    const authInfo = {
        user,
        loading,
        setUser,
        creatUser,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;