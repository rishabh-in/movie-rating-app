import express from 'express';
import protect from '../Middleware/authMiddleware.js'
import { login, userRegistration } from '../Controller/auth.js';
const routes = express.Router();


routes.get("/", protect,  (req, res) => {
  console.log("Hitting HOME")
})

routes.post("/signup", userRegistration)
routes.post("/login", login);


export  default routes;