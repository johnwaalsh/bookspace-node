import mongoose from "mongoose";
const userBooksSchema = new mongoose.Schema(
    {
        id: { type: String },
        title: { type: String },
        username: { type: String },
        author_first: { type: String },
        author_last: { type: String },
        desc: { type: String },
        image: { type: String },
        favorites: { type: Array },
        currentlyReading: { type: Array },
    },
    { collection: "books" }
);
export default userBooksSchema;