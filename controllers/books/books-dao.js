import booksModel from "./books-model.js";


export const findAllBooks = () => booksModel.find();


export const findBookById = (bid) => booksModel.findById(bid);

export const createBook = (book) => booksModel.create(book);

export const updateBook = (bid, book) =>
    booksModel.updateOne({ _id: bid }, book);

export const deleteBook = (bid) => booksModel.deleteOne({ _id: bid });