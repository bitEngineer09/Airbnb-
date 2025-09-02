import { uploadOnCloudinary } from "../config/cloudinary.js";
import { Listing } from "../models/listing.model.js";
import {
    addListingToUser,
    createNewListing,
    deleteListingById,
    findListingByHost,
    findListingById,
    findUserByHostId,
    updateListingById
} from "../services/listing.services.js";



// ADD NEW LISTING
export const addListing = async (req, res) => {
    try {
        // console.log("req.body: ", req.body);
        // console.log("req.files: ", req.files);
        if (!req.user) return res.status(400).json({ message: "User not authenticated" })

        const { title, description, rent, city, landmark, category } = req.body;

        const image1 = await uploadOnCloudinary(req.files.image1[0].path);
        const image2 = await uploadOnCloudinary(req.files.image2[0].path);
        const image3 = await uploadOnCloudinary(req.files.image3[0].path);

        const newListing = await createNewListing({ host: req.user.id, title, description, rent, city, landmark, category, image1, image2, image3 });
        if (!newListing) return res.status(400).json({ message: "error occurred in adding new listing" });

        const userId = req.user.id;

        const user = await addListingToUser(userId, newListing._id);
        if (!user) return res.status(404).json({ message: "User not found." })

        res.status(201).json(newListing);

    } catch (error) {
        console.log("addListing controller error: ", error);
        return res.json({ message: `add listing controller error: ${error}` });
    }
}



// UPDATE LISTING 
export const updateListing = async (req, res) => {
    try {
        if (!req.user) return res.status(400).json({ message: "User not authenticated" })

        const { id } = req.params;

        const { title, description, rent, city, landmark, category } = req.body;

        const image1 = req.files?.image1 ? await uploadOnCloudinary(req.files.image1[0].path) : undefined;
        const image2 = req.files?.image2 ? await uploadOnCloudinary(req.files.image2[0].path) : undefined;
        const image3 = req.files?.image3 ? await uploadOnCloudinary(req.files.image3[0].path) : undefined;

        const update = await updateListingById({ id, title, description, rent, city, landmark, category, image1, image2, image3 });
        if (!update) return res.status(500).json({ message: "Internal Server Error" });

        return res.status(201).json(update);

    } catch (error) {
        console.log("update listing error: ", error);
        res.status(400).json({ message: `update listing error: ${error}` });
    }
}



// DELETE LISTING
export const deleteListing = async (req, res) => {
    try {
        if (!req.user) return res.status(400).json({ message: "User not authenticated" });

        const { id } = req.params;

        const removeListing = await deleteListingById(id);
        if (!removeListing) return res.status(500).json({ message: "Internal Server Error" });

        return res.status(200).json({ message: `Listing is removed with id ${id}` });

    } catch (error) {
        console.log("delete listing controller error: ", error);
        return res.status(400).json({ message: `Delete listing controller error: ${error}` });
    }
}


// GET ALL LISTING
export const getAllListing = async (req, res) => {
    try {
        const listings = await Listing.find({});
        return res.status(200).json({ success: true, data: listings })

    } catch (error) {
        return res.status(400).json({ success: false, message: `get all listing error: ${error}` });
    }
}


// GET LISTING BY ID
export const getListingById = async (req, res) => {
    try {
        // if (!req.user) return res.status(400).json({success: false, message: "User not authenticated"});

        const { id } = req.params;
        const singleList = await findListingById(id);
        return res.status(200).json(singleList);
    } catch (error) {
        return res.status(400).json({ success: false, message: `get listing by id error: ${error}` });
    }
}


// GET LISTING BY HOST ID
export const getListingByHostId = async (req, res) => {
    try {
        if (!req.user) return res.status(400).json({ success: false, message: "User not authenticated" });

        const { hostId } = req.params;
        const listings = await findListingByHost(hostId);
        if (!listings) return res.status(400).json({ success: false, message: "No Listings found" });

        return res.status(200).json(listings);

    } catch (error) {
        console.log("getListingByHostId error: ", error);
        return res.status(400).json({ success: false, message: `get listing by host id error: ${error}` });
    }
}



// GET USER BY HOST ID
export const getUserByHostId = async (req, res) => {
    try {
        if (!req.user) return res.status(400).json({success: false, message: "User not authenticated"});

        const {hostId} = req.params;
        console.log("hostId received:", hostId);
        if (!hostId) return res.status(400).json({success: false, message: "host id is missing"})

        const user = await findUserByHostId(hostId);
        if (!user) return res.status(400).json({success: false, message: "User not found"});

        return res.status(200).json({success: true, user: user});

    } catch (error) {
        console.log("getUserByHostId error: ", error);
        return res.status(400).json({success: false, message: error});
    }
}