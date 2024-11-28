import { Request, Response } from 'express';
import Product from '../models/product';
import Inventory from '../models/inventory';
import InventoryTransaction from '../models/inventoryTransaction';

const newProduct = async (req: Request, res: Response) => {
  try {
    const createdProduct = await Product.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      stockQuantity: req.body.stockQuantity,
      supplierId: req.body.supplierId,
      categoryId: req.body.categoryId,
      barcode: req.body.barcode,
      cgst: req.body.cgst,
      sgst: req.body.sgst,
    });
    const productId = createdProduct.get('productId');

    await Inventory.create({
      productId: productId,
      quantity_in_stock: req.body.stockQuantity || 0,
    });
    await InventoryTransaction.create({
      productId: productId,
      transactionType: 'IN',
      quantity: req.body.stockQuantity || 0,
      employeeId: req.body.employeeId,
      transactionDate: new Date(),
    });
    res.status(201).json({
      message: 'Product added successfully',
      product: newProduct,
    });
  } catch (error) {
    console.error('Error adding product:', error);
    res
      .status(500)
      .json({ message: 'Error adding product', error: error.message });
  }
};
const addStock = async (req: Request, res: Response) => {
  try {
    const { productId, quantity, employeeId } = req.body;

    if (!productId || !quantity || !employeeId) {
      return res.status(400).json({
        message: 'Product ID, quantity, and employee ID are required.',
      });
    }

    const inventory = await Inventory.findOne({ where: { productId } });
    if (!inventory) {
      return res
        .status(404)
        .json({ message: 'Product not found in inventory.' });
    }

    const product = await Product.findByPk(productId);
    if (!product) {
      return res
        .status(404)
        .json({ message: 'Product not found in the products table.' });
    }
    // console.log(quantity);
    let quantity_in_stock = inventory.get('quantity_in_stock') as number;
    quantity_in_stock += quantity;
    inventory.set('quantity_in_stock', quantity_in_stock);

    await inventory.save();

    let stockQuantity = product.get('stockQuantity') as number;
    stockQuantity += quantity;
    product.set('stockQuantity', stockQuantity);

    await product.save();

    await InventoryTransaction.create({
      productId: productId,
      transactionType: 'IN',
      quantity: quantity,
      employeeId: employeeId,
      transactionDate: new Date(),
    });

    res.status(200).json({
      message: 'Stock added successfully.',
      newStockQuantity: quantity_in_stock,
    });
  } catch (error) {
    console.error('Error adding stock:', error);
    res
      .status(500)
      .json({ message: 'Error adding stock', error: error.message });
  }
};

export const ProductController = {
  newProduct,
  addStock,
};
