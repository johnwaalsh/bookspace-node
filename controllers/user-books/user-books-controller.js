import * as userBooksDao from "./user-books-dao.js";


const UserBookController = (app) => {
    const create  = async (req, res) => {
        console.log("in create?")
        const bookIDToCreate = req.params.bid;
        let updates = req.body;
        updates._id = bookIDToCreate;
        const status = await userBooksDao.createUserBook(updates);
        res.json(status);
        return status;
    }

    const getBooksByUsername = async (req, res) => {
        console.log("in get book")
        const username = req.body.user;
        console.log(username)
        const books = await userBooksDao.findUserBooksByUsername(username);
        res.json(books);
    }

    app.post ("/api/user-books/create/:bid", create);
    app.post  ("/api/user-books/user", getBooksByUsername);
};
export default UserBookController;