import express from 'express';
const router = express.Router();
import { ProductCategoryController } from '../controller/ProductCategoryController';

router.post('/newProductCategory', ProductCategoryController.newProductCategory);

export default router;
