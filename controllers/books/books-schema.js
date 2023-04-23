import mongoose from "mongoose";
const booksSchema = new mongoose.Schema(
    {
        title: { type: String },
        authors: { type: String },
        desc: { type: String },
        image: { type: String },
        favorites: { type: Array },
        currentlyReading: { type: Array },
    },
    { collection: "books" }
);
export default booksSchema;