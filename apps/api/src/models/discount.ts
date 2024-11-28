import db from "../config/db";

const { Sequelize, DataTypes } = require('sequelize');

const Discount = db.define(
  'Discount',
  {
    discountId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    saleId: {
      type: DataTypes.INTEGER,
      references: { model: 'Sales', key: 'saleId' },
      allowNull: false,
    },
    discountAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discountDescription: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Discounts',
    timestamps: false,
  }
);

export default Discount;
