import mongoose from "mongoose";
import userBooksSchema from "./user-books-schema.js";
const userBooksModel = mongoose.model("user-books", userBooksSchema);
export default userBooksModel;