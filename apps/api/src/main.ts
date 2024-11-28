import express from 'express';
import supplierRoute from './route/supplierRoute';
import productCategoryRoute from './route/productCategoryRoute';
import productRoute from './route/productRoute';
import roleRoute from './route/roleRouter';
import employeeRoute from './route/employeeRoute';
import './config/db';
import path from 'path';
import defineAssociations from './models/association';
import dataBase from './config/db';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
defineAssociations();
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/supplier', supplierRoute);
app.use('/productCategory', productCategoryRoute);
app.use('/product', productRoute);
app.use('/role', roleRoute);
app.use('/employee', employeeRoute);

app.get('/sample', (req, res) => {
  res.json({ name: 'saran', location: 'namakkal' });
});
dataBase
  .sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing the database: ', error);
  });
const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
