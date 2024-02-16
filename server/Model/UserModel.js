import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';
import path, { dirname } from 'path';
import { fileURLToPath } from "url";
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  profilePic: {
    type: String,
    contentType: String,
    default: `${path.join(dirname(fileURLToPath(import.meta.url)), "../Static/aukat.jpeg")}`
  },
  apikey: String,
  password: String,
  role: String,
  timestamp: Date
});

UserSchema.methods.matchPassword = async function(inputPassword) {
  return await bcryptjs.compare(inputPassword, this.password)
}

UserSchema.pre("save", async function (next) {
  if(!this.isModified) {
    next();
  }
  const salt = await bcryptjs.genSalt(saltRounds);
  this.password = await bcryptjs.hash(this.password, salt)
})
const UserModel = mongoose.model("Users", UserSchema)
export default UserModel;