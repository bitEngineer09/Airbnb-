import { Listing } from "../models/listing.model.js";
import { User } from "../models/user.model.js";

// CREATE NEW LISTING
export const createNewListing = async ({ host, title, description, rent, city, landmark, category, image1, image2, image3 }) => {
    return await Listing.create({
        host,
        title,
        description,
        rent,
        city,
        landmark,
        category,
        image1,
        image2,
        image3
    });
}

// ADD CREATED LISTING TO ITS USER
export const addListingToUser = async (id, newListingId) => {
    return await User.findByIdAndUpdate(id, { $push: { listing: newListingId } }, { new: true });
}


// UPDATE LISTING BY ID
export const updateListingById = async ({ id, title, description, rent, city, landmark, category, image1, image2, image3 }) => {
    return await Listing
        .findByIdAndUpdate(
            id,
            {
                $set: {
                    ...(title && { title }),
                    ...(description && { description }),
                    ...(rent && { rent }),
                    ...(city && { city }),
                    ...(landmark && { landmark }),
                    ...(category && { category }),
                    ...(image1 && { image1 }),
                    ...(image2 && { image2 }),
                    ...(image3 && { image3 })
                }
            },
            { new: true }
        );
}


// DELETE LISTING BY ID
export const deleteListingById = async (id) => {
    return await Listing.findByIdAndDelete(id);
}


// GET LISTING BY HOST ID
export const getListingByHost = async (hostId) => {
    return await Listing.find({host: hostId});
}


// GET LISTING BY ITS ID
export const findListingById = async (id) => {
    return await Listing.findById(id);
}