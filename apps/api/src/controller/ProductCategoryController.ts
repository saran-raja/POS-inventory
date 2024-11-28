import { Request, Response } from 'express';
import ProductCategory from '../models/productCategory';

const newProductCategory = async (req: Request, res: Response) => {
  try {
    const newSupplier = await ProductCategory.create({
      categoryName: req.body.categoryName,
    });

    res
      .status(201)
      .json({
        message: 'ProductCategory Added successfully',
        role: newSupplier,
      });
  } catch (error) {
    res.status(500).json({ message: 'Error Adding ProductCategory', error });
  }
};

export const ProductCategoryController = {
  newProductCategory,
};
