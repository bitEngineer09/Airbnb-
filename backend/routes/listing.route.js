import express from 'express';
import { isAuth } from '../middlewares/isAuth.js';
import { addListing, deleteListing, getAllListing, getListingById, updateListing } from '../controllers/listing.controller.js';
import { upload } from '../middlewares/multer.js';

const listingRouter = express.Router();

// CREATION ROUTE
listingRouter.post(
    '/add',
    isAuth,
    upload.fields([
        { name: "image1", maxCount: 1 },
        { name: "image2", maxCount: 1 },
        { name: "image3", maxCount: 1 }
    ]),
    addListing
);


// UPDATE ROUTE
listingRouter.post('/update/:id',
    isAuth,
    upload.fields([
        { name: "image1", maxCount: 1 },
        { name: "image2", maxCount: 1 },
        { name: "image3", maxCount: 1 }
    ]),
    updateListing
);


// DELETE ROUTE
listingRouter.post('/delete/:id', isAuth, deleteListing);

// GET ALL LISTINGS ROUTE
listingRouter.get('/get', isAuth, getAllListing);

// GET SINGLE LISTING BY ID
listingRouter.get('/get/:id', isAuth, getListingById);

export default listingRouter;