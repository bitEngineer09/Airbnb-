import React, { createContext, useEffect, useState } from 'react'
import { addListing, getListing, getListingCardById } from '../services/listing.services';

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

    const [listings, setListings] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);
    const [singleCardData, setSingleCardData] = useState([]);


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
                console.log("setListings data: ", ListingData);
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
            console.log(response);
            setSingleCardData(response);
            return response;

        } catch (error) {
            console.log("handleSingleCardData error: ", error);
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

        handleAddListing,
        fetchAllListing,

        listings, setListings,
        filteredListings, setFilteredListings,

        singleCardData, setSingleCardData,
        handleSingleCardData
    }


    return (

        <listingDataContext.Provider value={value}>
            {children}
        </listingDataContext.Provider>
    )
}

export default ListingContext