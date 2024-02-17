import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema({
  mediaId: {
    type: String,
    unique: true
  },
  mediaName: String,
  media: [{}],
  uploadedBy: String,
  directedBy: String,
  cast: Array,
  overview: String,
  timestamp: Date,
});


const MediaModel = mongoose.model("Media", MediaSchema);

export default MediaModel;