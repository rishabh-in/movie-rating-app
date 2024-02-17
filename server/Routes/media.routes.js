import express from 'express';
import protect from '../Middleware/authMiddleware.js';
import { upload } from '../Config/storage.js';
import { uploadMedia } from '../Controller/media.js';

const router = express.Router();

router.post("/media/upload",protect, upload.array("media", 5), uploadMedia)

export default router;