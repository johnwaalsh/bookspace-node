import * as reviewsDao from "./reviews-dao.js";


const ReviewController = (app) => {
    const createNewReview = async (req, res) => {
        const newReview = await reviewsDao.createReview(req.body);
        res.json(newReview);
    };
    const getReviewsByBook = async (req, res) => {
        const reviews = await reviewsDao.findReviewsByBookID(req.body.id);
        res.json(reviews);
    };
    const getReviewsByUser = async (req, res) => {
        const reviews = await reviewsDao.findReviewsByUserID(req.body.user);
        res.json(reviews);
    };

    const getAllReviews = async (req, res) => {
        const reviews = await reviewsDao.findAllReviews();
        res.json(reviews);
    };

    const editReview   = async (req, res) => {
        const reviewIDToUpdate = req.params.rid;
        const updates = req.body;
        const status = await reviewsDao.updateReview(reviewIDToUpdate, updates);
        res.json(status);
    };

    const deleteExistingReview = async (req, res) => {
        const reviewIDToDelete = req.params.rid;
        const status = await reviewsDao.deleteReview(reviewIDToDelete);
    };

    app.post("/api/reviews/create", createNewReview);
    app.post("/api/reviews/book",    getReviewsByBook);
    app.post("/api/reviews/user",    getReviewsByUser);
    app.put("/api/reviews/:rid", editReview);
    app.put("/api/reviews/delete/:rid", deleteExistingReview);
    app.get("/api/reviews/all", getAllReviews);
};
export default ReviewController;