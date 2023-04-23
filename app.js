import express from 'express';
import cors from 'cors'
import session from "express-session";
import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/bookspace');

import AuthController from "./controllers/users/auth-controller.js";
import BookController from "./controllers/books/books-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import UserBooksController from "./controllers/user-books/user-books-controller.js";

const app = express()
app.use(
    session({
        secret: "abcdef",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(express.json());

AuthController(app);
BookController(app);
ReviewsController(app);
UserBooksController(app);

app.get('/hello', (req, res) => {res.send('Hello World!')})

const port = process.env.PORT || 4000;

app.listen(port)
