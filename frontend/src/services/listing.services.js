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