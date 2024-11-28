import express from 'express';
const router = express.Router();
import { roleController } from '../controller/roleController';

router.post('/new-role', roleController.newRole);

export default router;
