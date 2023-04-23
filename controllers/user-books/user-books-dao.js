import userBooksModel from "./user-books-model.js";

export const findUserBooksByUsername = (username) => userBooksModel.find({"username" : username});

export const createUserBook = (book) => userBooksModel.create(book);