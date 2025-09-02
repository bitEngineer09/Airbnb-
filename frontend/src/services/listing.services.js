import axios from "axios";
import { serverURL } from "../config/serverUrl";


// GET ALL LISTING
export const getListing = async () => {
    try {
        const result = await axios(serverURL + "/api/listing/get");
        return result.data;
    } catch (error) {
        console.log("getListng error: ", error);
    }
}


// ADD LISTING
export const addListing = async (formdata) => {
    try {
        const result = await axios
            .post(
                serverURL + "/api/listing/add",
                formdata,
                { withCredentials: true }
            )
        return result.data;
    } catch (error) {
        console.log("add listing error: ", error);
    }
}


// GET LISTING CARD BY ID
export const getListingCardById = async (id) => {
    try {
        const result = await axios
            .get(
                serverURL + `/api/listing/get/${id}`,
                { withCredentials: true }
            )
        return result.data;
    } catch (error) {
        console.log("getListingCardById services: ", error);
        return { error: "Error fetching listing details" };
    }
}


// GET LISTING BY HOST ID
export const getListingByHostId = async (hostId) => {
    try {
        // console.log(hostId)
        const result = await axios.get(serverURL + `/api/listing/getByHost/${hostId}`, {withCredentials: true});
        return result.data;

    } catch (error) {
        return {error: `Error fetching lists by host Id: ${error}`};
    }
}


// UPDATE LISTING
export const updateListing = async (id, formData) => {
    try {
        const result = await axios.post(
            serverURL + `/api/listing/update/${id}`,
            formData,
            { withCredentials: true }
        );
        return result.data;
    } catch (error) {
        console.log("updateListing services error: ", error);
        return { error: "Error updating details" };
    }
};


// DELETE LISTING
export const deleteListing = async (id) => {
    try {
        const result = await axios.delete(serverURL + `/api/listing/delete/${id}`, {withCredentials: true});
        return result.data;
        
    } catch (error) {
         console.log("deleteListing services error: ", error);
        return { error: "Error deleteListing" };
    }
}


// GET USER BY HOST ID
export const getUserByHostId = async (hostId) => {
    if (!hostId) {
        console.warn("getUserByHostId called without hostId");
        return { error: "Missing hostId" };
    }
    try {
        const result = await axios.get(serverURL + `/api/listing/getUserByHost/${hostId}`, {withCredentials: true});
        return result.data;

    } catch (error) {
        console.log("getUserByHostId error: ", error);
        return {error: "Error finding user by host ID"};
    }
}