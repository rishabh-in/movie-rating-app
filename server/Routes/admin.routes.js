import express from 'express';
import { requestForRoleUpgrade, updateRequest } from '../Controller/admin.js';
const router = express.Router();

router.post("/admin/request", requestForRoleUpgrade)
router.post("/admin/update", updateRequest);

export default router;