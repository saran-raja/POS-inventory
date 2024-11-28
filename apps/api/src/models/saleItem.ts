import db from '../config/db';

const { Sequelize, DataTypes } = require('sequelize');

const SaleItem = db.define(
  'SaleItem',
  {
    saleItemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    saleId: {
      type: DataTypes.INTEGER,
      references: { model: 'Sales', key: 'saleId' },
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: { model: 'Products', key: 'productId' },
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unitPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    cgstAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    sgstAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: 'SaleItems',
    timestamps: false,
  }
);

export default SaleItem;
