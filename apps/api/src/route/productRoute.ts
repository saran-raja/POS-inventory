import express from 'express';
const router = express.Router();
import { ProductController } from '../controller/productController';

router.post('/newProduct', ProductController.newProduct);
router.post('/add-stock', ProductController.addStock);

export default router;
