import mongoose from "mongoose";
const reviewsSchema = new mongoose.Schema(
    {
        book: { type: String },
        title: { type: String },
        author: { type: String },
        rating: { type: Number },
        text: { type: String },
    },
    { collection: "reviews" }
);
export default reviewsSchema;