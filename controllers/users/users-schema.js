import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        firstname: { type: String },
        lastname: { type: String },
        email: { type: String },
        role: {type: String, enum: ["Reader", "Author", "Critic"]}
    },
    { collection: "users" }
);
export default usersSchema;