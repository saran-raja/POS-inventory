import db from '../config/db';

const { Sequelize, DataTypes } = require('sequelize');

const Role = db.define(
  'Role',
  {
    roleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Roles',
    timestamps: false,
  }
);
export default Role;
