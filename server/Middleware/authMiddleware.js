import jwt from 'jsonwebtoken';
import User from '../Model/UserModel.js'


const protect = (req, res, next) => {
  let token;
  if(
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    //Verify token 
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.tokenId = decoded.id;
    next()
  }

  if(!token) {
    res.status(401);
    throw new Error("No token")
  }
}

export default protect