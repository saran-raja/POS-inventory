import db from '../config/db';

const { Sequelize, DataTypes } = require('sequelize');

const Supplier = db.define(
  'Supplier',
  {
    supplierId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactInfo: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Suppliers',
    timestamps: false,
  }
);

export default Supplier;
