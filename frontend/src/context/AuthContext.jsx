import React, { createContext, useEffect, useState } from 'react';
import {
    getCurrentUserData,
    postLogin,
    postLogout,
    postSignup
} from '../services/auth.services';

export const authDataContext = createContext();

const AuthContext = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [showSingup, setShowSignup] = useState(false);

    
    // ✅ Get user on initial load
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getCurrentUserData();
                console.log("fetched user data: ", data.user);
                setCurrentUser(data.user);
            } catch (error) {
                console.error("fetchUser error:", error);
                // Don't throw — just handle
            }
        };
        fetchUser();
    }, []);


    // LOGIN FUNCITONALITY
    const loginUser = async ({ email, password }) => {
        try {
            const loginResponse = await postLogin({ email, password });
            return loginResponse;
        } catch (error) {
            return {
                success: false,
                message: error?.response?.data?.message || "Login failed"
            };
        }
    }


    // SIGN UP FUNCTIONLITY
    const signupUser = async ({ name, email, password }) => {
        try {
            const signupResponse = await postSignup({ name, email, password })
            return signupResponse;
        } catch (error) {
            return {
                success: false,
                message: error?.response?.data?.message || "Registration Failed"
            }
        }
    }


    // LOGOUT FUNCTIONALILTY
    const logoutUser = async () => {
        try {
            const response = await postLogout();
            return response
        } catch (error) {
            return {
                success: false,
                message: error?.response?.data?.message || "Logout Failed"
            }
        }
    }

    const value = {
        currentUser, setCurrentUser,
        loginUser, signupUser, logoutUser,

        showLogin, setShowLogin,
        showSingup, setShowSignup,
    };

    return (
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
    );
};

export default AuthContext;
