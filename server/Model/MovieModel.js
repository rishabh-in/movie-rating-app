import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  movieId: {
    type: String,
    unique: true
  },
  movieName: String,
  movieMedia: [{
    data: Buffer,
    type: {
      enum: ["image", "video"]
    }
  }],
  timestamp: Date
});


const MovieModel = mongoose.model("Rating", MovieSchema);

export default RatingModel;