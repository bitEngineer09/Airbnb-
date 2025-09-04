import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    listingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        default: "INR"
    },
    razorpayOrderId: { type: String },
    razorpayPaymentId: {type: String},
    razorpaySignature: {type: String},
    status: {type: String, enum: ["pending", "paid", "failed"], default: "pending"},
}, {timestamps: true});

export const Order = mongoose.model("Order", orderSchema);