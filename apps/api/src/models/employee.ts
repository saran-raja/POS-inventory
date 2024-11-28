import db from "../config/db";

const { Sequelize, DataTypes } = require('sequelize');

const Employee = db.define(
  'Employee',
  {
    employeeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Roles', key: 'roleId' },
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    contactInfo: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Employees',
    timestamps: false,
  }
);

export default Employee;
