import express from 'express';
const router = express.Router();
import { supplierController } from '../controller/supplierController';

router.post('/newsupplier', supplierController.newSupplier);

export default router;
