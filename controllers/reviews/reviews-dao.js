import reviewsModel from "./reviews-model.js";


export const findAllReviews = (bid) => reviewsModel.find();

export const findReviewsByBookID = (bid) => reviewsModel.find({"book": bid});
export const findReviewsByUserID = (user) => reviewsModel.find({"author": user});

export const findReviewById = (rid) => reviewsModel.findById(rid);

export const createReview = (review) => reviewsModel.create(review);

export const updateReview = (rid, review) =>
    reviewsModel.updateOne({ _id: rid }, review);

export const deleteReview = (rid) => reviewsModel.findByIdAndDelete(rid);