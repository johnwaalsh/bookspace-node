import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        firstname: { type: String },
        lastname: { type: String },
        email: { type: String },
        favorites: { type: Array },
        currentlyReading: { type: Array },
        followers: { type: Array },
        following: { type: Array },
        reviews: { type: Array },
        role: {type: String, enum: ["Reader", "Author", "Critic"]},
        recommendation: { type: String },
        books: { type: Array },
    },
    { collection: "users" }
);
export default usersSchema;