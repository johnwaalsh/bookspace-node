import * as booksDao from "./Books-dao.js";


const BookController = (app) => {
    const getOrCreate   = async (req, res) => {
        const bookIDToUpdate = req.params.bid;
        let updates = req.body;
        const exists = await booksDao.findBookById(bookIDToUpdate);
        if (exists) {
            res.json(exists);
            return;
        }
        else {
            updates._id = bookIDToUpdate;
            try {
                const status = await booksDao.createBook(updates);
                res.json(status);
                return;
            } catch (e) {
                return;
            }

            return;
        }
    };

    const updateBook = async (req, res) => {
        const bookIDToUpdate = req.params.bid;
        let updates = req.body;
        const status = booksDao.updateBook(bookIDToUpdate, updates);
        return status;

    }

    const getBook = async (req, res) => {
        const bookID = req.params.bid;
        const book = await booksDao.findBookById(bookID);
        console.log(book)
        res.json(book);

    }

    app.get ("/api/books/:bid", getBook);
    app.post ("/api/books/:bid", getOrCreate);
    app.put  ("/api/books/:bid", updateBook);
};
export default BookController;