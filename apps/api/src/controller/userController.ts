import { Request, Response } from 'express';
import Role from '../models/role';
import Customer from '../models/customer';
import Discount from '../models/discount';

const role = async (req: Request, res: Response) => {
  try {
    const newRole = await Role.create({
      name: req.body.name,
      description: req.body.description,
    });

    res.status(201).json({ message: 'Role created successfully', role: newRole });
  } catch (error) {
    res.status(500).json({ message: 'Error creating role', error });
  }
};
const customer = async (req:Request,res:Response)=>{
  const newRole = await Customer.create({
    name: req.body.name,
    description: req.body.description,
  });
  
}
const discounts = async (req:Request,res:Response)=>{
  const newRole = await Discount.create({
    name: req.body.name,
    description: req.body.description,
  });
  
}
export const routerController = {
  role,customer,discounts
};
