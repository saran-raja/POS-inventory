import Customer from './customer';
import Discount from './discount';
import Employee from './employee';
import Inventory from './inventory';
import InventoryTransaction from './inventoryTransaction';
import Payment from './payment';
import Product from './product';
import ProductCategory from './productCategory';
import Role from './role';
import Sale from './sale';
import SaleItem from './saleItem';
import Supplier from './supplier';

const defineAssociations = () => {
  try {
    Product.belongsTo(ProductCategory, { foreignKey: 'categoryId' });
    Product.belongsTo(Supplier, { foreignKey: 'supplierId' });
    Product.hasMany(SaleItem, { foreignKey: 'productId' });
    Product.hasMany(InventoryTransaction, { foreignKey: 'productId' });
    Product.hasOne(Inventory, { foreignKey: 'productId', as: 'inventory' });

    ProductCategory.hasMany(Product, { foreignKey: 'categoryId' });

    Supplier.hasMany(Product, { foreignKey: 'supplierId' });

    Customer.hasMany(Sale, { foreignKey: 'customerId' });

    Role.hasMany(Employee, { foreignKey: 'roleId' });

    Employee.belongsTo(Role, { foreignKey: 'roleId' });
    Employee.hasMany(Sale, { foreignKey: 'employeeId' });
    Employee.hasMany(InventoryTransaction, { foreignKey: 'employeeId' });

    Sale.belongsTo(Customer, { foreignKey: 'customerId' });
    Sale.belongsTo(Employee, { foreignKey: 'employeeId' });
    Sale.hasMany(SaleItem, { foreignKey: 'saleId' });
    Sale.hasMany(Payment, { foreignKey: 'saleId' });
    Sale.hasMany(Discount, { foreignKey: 'saleId' });

    SaleItem.belongsTo(Sale, { foreignKey: 'saleId' });
    SaleItem.belongsTo(Product, { foreignKey: 'productId' });

    Payment.belongsTo(Sale, { foreignKey: 'saleId' });

    Discount.belongsTo(Sale, { foreignKey: 'saleId' });

    InventoryTransaction.belongsTo(Employee, { foreignKey: 'employeeId' });
    InventoryTransaction.belongsTo(Product, { foreignKey: 'productId' });

    Inventory.belongsTo(Product, { foreignKey: 'productId', as: 'product' });
  } catch (error) {
    console.error('Error defining associations: ', error);
  }
};

export default defineAssociations;
