import express from 'express';
import { fetchUserDetails } from '../Controller/git.js';
let routes = express.Router();

routes.get("/git/fetch", fetchUserDetails);

export default routes