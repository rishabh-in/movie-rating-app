import express from 'express';
import { fetchUserDetails } from '../Controller/git.service.js';
let routes = express.Router();

routes.get("/git/fetch", fetchUserDetails);

export default routes