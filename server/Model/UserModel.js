import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';
const saltRounds = 10;

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

userSchema.methods.matchPassword = async function(inputPassword) {
  return await bcryptjs.compare(inputPassword, this.password)
}


userSchema.pre("save", async function (next) {
  if(!this.isModified) {
    next();
  }
  const salt = await bcryptjs.genSalt(saltRounds);
  this.password = await bcryptjs.hash(this.password, salt)
})
const userModel = mongoose.model("Users", userSchema)
export default userModel;