import { Sequelize } from 'sequelize';

const dataBase = new Sequelize('pos_inventory', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging:console.log,
});

dataBase
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    console.log(`Database is likely to exist.`);
  })
  .catch((error: any) => {
    console.error('Unable to connect to the database:', error);
    console.log(`Database  does not exist or is unreachable.`);
  });
export default dataBase;
