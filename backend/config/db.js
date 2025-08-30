import mongoose from "mongoose";

export const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log(`database connected successfully`)
    } catch (error) {
        console.error(error.message);
    }
}

