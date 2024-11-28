import { Model } from 'sequelize';
import db from '../config/db';

const { Sequelize, DataTypes } = require('sequelize');
// interface InventoryAttributes {
//   transactionId?: number;
//   productId: number;
//   transactionType: string;
//   quantity: number;
//   transactionDate?: Date;
//   employeeId: number;
// }
const InventoryTransaction = db.define(
  'InventoryTransaction',
  {
    transactionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: { model: 'Products', key: 'productId' },
      allowNull: false,
    },
    transactionType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transactionDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    employeeId: {
      type: DataTypes.INTEGER,
      references: { model: 'Employees', key: 'employeeId' },
      allowNull: false,
    },
  },
  {
    tableName: 'InventoryTransactions',
    timestamps: false,
  }
);

export default InventoryTransaction;
