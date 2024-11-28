import db from '../config/db';

const { Sequelize, DataTypes } = require('sequelize');

const Payment = db.define(
  'Payment',
  {
    paymentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    saleId: {
      type: DataTypes.INTEGER,
      references: { model: 'Sales', key: 'saleId' },
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Payments',
    timestamps: false,
  }
);

export default Payment;
