import mongoose, { mongo } from "mongoose";

let connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo is connected")
  } catch (error) {
    console.log(error)
  }
}

export default connectDB;