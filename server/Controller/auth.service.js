import generateToken from "../Config/generateToken.js";
import userModel from "../Model/UserModel.js";

export const userRegistration = async (req, res) => {
  try {
    let {username, password} = req.body;
    if(!username || !password) {
      res.status(400);
      throw new Error("Missing Details");
    }
    let userExist = await userModel.findOne({username})
    if(userExist) {
      res.status(400).json({message: "user already exists"});
      return;
    }
    let newUser = await userModel.create({username, password});
    if(newUser) {
      res.status(200).json({
        message: "User registered",
        username,
        token: generateToken(newUser._id)
      });
    }
  } catch (error) {
    console.log(error);
  }
  
}

export const login = async (req, res) => {
  try {
    let {username, password} = req.body;
    let user = await userModel.findOne({username});
    if(user && (user.matchPassword(password))) {
      res.json({
        message: "Login successfull",
        token: generateToken(user._id)
      })
    } else {
      res.json({
        message: "Invalid email or password"
      })
    }
  } catch (error) {
    console.log(error)
  }
}