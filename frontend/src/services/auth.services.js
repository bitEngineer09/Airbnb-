import { serverURL } from '../config/serverUrl';
import axios from 'axios';

//  GET LOGGEDIN USER DATA
export const getCurrentUserData = async () => {
    try {
        const response = await axios.get(serverURL + "/api/auth/getUserData", { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Error fetching user: ", error);
        throw new Error;
    }
}


// POST LOGIN DATA
export const postLogin = async ({ email, password }) => {
    try {
        const response = await axios
            .post(
                serverURL + "/api/auth/login",
                { email, password },
                { withCredentials: true }
            );
        
        return response.data;

    } catch (error) {
        console.log("post login error: ", error);
    }
}


// POST SIGN UP DATA    
export const postSignup = async ({ name, email, password }) => {
    try {
        const response = await axios
            .post(
                serverURL + "/api/auth/register",
                { name, email, password },
                { withCredentials: true }
            );

        return response.data;

    } catch (error) {
        console.log("post sign up error: ", error);
    }
}


// LOGOUT USER
export const postLogout = async () => {
    try {
        const result = await axios.post(serverURL + "/api/auth/logout", {}, {withCredentials: true});
        return result.data;
    } catch (error) {
        console.log("post logout error: ", error)
    }
}
