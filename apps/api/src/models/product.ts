import {Sequelize, DataTypes,Model } from 'sequelize';
import db from '../config/db';

// const {  } = require('sequelize');
interface ProductAttributes {
  productId?: number;
  name: string;
  price: number;
  description?: string;
  stockQuantity: number;
  supplierId: number;
  categoryId: number;
  barcode?: string;
  cgst: number;
  sgst: number;
}
const Product = db.define<Model<ProductAttributes>>(
  'Product',
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    stockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    supplierId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Suppliers', key: 'supplierId' },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'ProductCategories', key: 'categoryId' },
    },
    barcode: {
      type: DataTypes.STRING,
      unique: true,
    },
    cgst: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    sgst: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: 'Products',
    timestamps: false,
  }
);

export default Product;
