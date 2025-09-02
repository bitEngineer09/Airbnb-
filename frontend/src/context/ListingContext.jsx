import React, { createContext, useEffect, useState } from 'react'
import { addListing, deleteListing, getListing, getListingByHostId, getListingCardById, getUserByHostId, updateListing } from '../services/listing.services';

export const listingDataContext = createContext();

const ListingContext = ({ children }) => {

    // USE STATES
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rent, setRent] = useState("");
    const [city, setCity] = useState("");
    const [landmark, setLandmark] = useState("");
    const [category, setCategory] = useState("");

    const [frontendImage1, setFrontendImage1] = useState(null);
    const [frontendImage2, setFrontendImage2] = useState(null);
    const [frontendImage3, setFrontendImage3] = useState(null);

    const [backendImage1, setBackendImage1] = useState(null);
    const [backendImage2, setBackendImage2] = useState(null);
    const [backendImage3, setBackendImage3] = useState(null);

    const [newFrontendImage1, setNewFrontendImage1] = useState(null);
    const [newFrontendImage2, setNewFrontendImage2] = useState(null);
    const [newFrontendImage3, setNewFrontendImage3] = useState(null);

    const [listings, setListings] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);
    const [hostListing, setHostListing] = useState([]);
    const [singleCardData, setSingleCardData] = useState([]);

    const [userByHostId, setUserByHostId] = useState([]);


    // HANDLE ADD LISTIG
    const handleAddListing = async () => {

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("rent", rent);
        formData.append("city", city);
        formData.append("landmark", landmark);
        formData.append("category", category);
        formData.append("image1", backendImage1);
        formData.append("image2", backendImage2);
        formData.append("image3", backendImage3);

        const response = await addListing(formData);
        console.log("handleAddListing data: ", response);
    }


    // HANDLE UPDATE LISTING
    const handleUpdateListing = async (id) => {

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("rent", rent);
        formData.append("city", city);
        formData.append("landmark", landmark);
        formData.append("category", category);

        if (backendImage1) formData.append("image1", backendImage1);
        if (backendImage2) formData.append("image2", backendImage2);
        if (backendImage3) formData.append("image3", backendImage3);

        const response = await updateListing(id, formData);
        console.log("handleUpdateListing response: ", response);
        return response;
    }


    // FETCHING ALL LISTNGS ON HOME PAGE
    const fetchAllListing = async () => {
        try {
            const response = await getListing();
            return response.data;

        } catch (error) {
            console.log("fetch all listing error: ", error);
        }
    }


    // GETTING ALL LISTINGS DATA AND SET IN A STATE 
    useEffect(() => {
        const handleSetListings = async () => {
            try {
                const ListingData = await fetchAllListing();
                setListings(ListingData);
                // yaha pe humne filterdListing bhi esliye set kiya, cuz ab hum home 
                // page pe esi filterd data se to render kara re hai
                setFilteredListings(ListingData);
                // console.log("setListings data: ", ListingData);
            } catch (error) {
                console.error(error.message);
            }
        }
        handleSetListings()
    }, [])



    // GET SINGLE LISTTING CARD DATA BY ID
    const handleSingleCardData = async (id) => {
        try {
            const response = await getListingCardById(id);
            // console.log(response);
            setSingleCardData(response);
            return response;

        } catch (error) {
            console.log("handleSingleCardData error: ", error);
        }
    }


    // HANDLE LISTINGS BY HOST ID
    const handleListingByHost = async (hostId) => {
        try {
            const response = await getListingByHostId(hostId);
            console.log(response);
            setHostListing(response);
            return response;

        } catch (error) {
            console.log("handleListingByHost error: ", error);
        }
    }


    // DELETE LISTING BY ID
    const handleDeleteListing = async (id) => {
        try {
            const response = await deleteListing(id); 
            console.log(response);
            return response;

        } catch (error) {
             console.log("handleDeleteListing error: ", error);
        }
    }


    // HANDLE USER BY HOST ID
    const handleUserByHostId = async (hostId) => {
        try {
            const response = await getUserByHostId(hostId);
            console.log(response);
            return response;
        } catch (error) {
            console.log("handleUserByHostId error: ", error);
        }
    }


    // SENDING DATA
    const value = {

        title, setTitle,
        description, setDescription,
        rent, setRent,
        city, setCity,
        landmark, setLandmark,
        category, setCategory,

        frontendImage1, setFrontendImage1,
        frontendImage2, setFrontendImage2,
        frontendImage3, setFrontendImage3,

        backendImage1, setBackendImage1,
        backendImage2, setBackendImage2,
        backendImage3, setBackendImage3,

        newFrontendImage1, setNewFrontendImage1,
        newFrontendImage2, setNewFrontendImage2,
        newFrontendImage3, setNewFrontendImage3,

        handleAddListing,  handleUpdateListing, handleDeleteListing,
        fetchAllListing,

        listings, setListings,
        filteredListings, setFilteredListings,

        singleCardData, setSingleCardData,
        handleSingleCardData,

        hostListing, setHostListing,
        handleListingByHost, handleUserByHostId,
        userByHostId, setUserByHostId
    }

    return (

        <listingDataContext.Provider value={value}>
            {children}
        </listingDataContext.Provider>
    )
}

export default ListingContext