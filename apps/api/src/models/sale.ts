import db from '../config/db';

const { Sequelize, DataTypes } = require('sequelize');

const Sale = db.define(
  'Sale',
  {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      references: { model: 'Customers', key: 'customerId' },
      allowNull: true,
    },
    employeeId: {
      type: DataTypes.INTEGER,
      references: { model: 'Employees', key: 'employeeId' },
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'Sales',
    timestamps: false,
  }
);
export default Sale;
