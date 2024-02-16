import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema({
  movieId: {
    type: String,
    unique: true
  },
  movieName: String,
  movieRating: {
    type: Number,
    min: 0,
    max: 10
  },
  movieReview: String,
  userEmail: String,
  timestamp: Date
});


const RatingModel = mongoose.model("Rating", RatingSchema);

export default RatingModel;