import express from 'express';
const router = express.Router();
import { employeeController } from '../controller/employeeController';

router.post('/new-Employee', employeeController.createEmployee);

export default router;
