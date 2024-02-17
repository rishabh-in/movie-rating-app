import express from 'express';
import { requestForRoleUpgrade, updateRequest } from '../Controller/admin.js';
import protect from '../Middleware/authMiddleware.js';
const router = express.Router();

router.post("/admin/request",protect, requestForRoleUpgrade)
router.post("/admin/update",protect, updateRequest);



export default router;