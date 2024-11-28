import { Request, Response } from 'express';
import Supplier from '../models/supplier';

const newSupplier = async (req: Request, res: Response) => {

  try {
    const newSupplier = await Supplier.create({
      name: req.body.name,
      contactInfo: req.body.contactInfo,
      address: req.body.address,
    });

    res
      .status(201)
      .json({ message: 'Supplier Added successfully', role: newSupplier });
  } catch (error) {
    res.status(500).json({ message: 'Error Adding Supplier', error });
  }
};

export const supplierController = {
  newSupplier,
};
