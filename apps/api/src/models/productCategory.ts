import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/db';

const ProductCategory = db.define(
  'ProductCategory',
  {
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'ProductCategories',
    timestamps: false,
  }
);
// export  const ProductCategorys={ProductCategory}
export default ProductCategory;
