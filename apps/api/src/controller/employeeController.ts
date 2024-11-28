import { Request, Response } from 'express';
import Employee from '../models/employee';

const createEmployee = async (req: Request, res: Response) => {
  try {
    const { name, roleId, salary, contactInfo } = req.body as any;

    const newEmployee = await Employee.create({
      name,
      roleId,
      salary,
      contactInfo,
    });

    res.status(201).json({
      message: 'Employee created successfully!',
      data: newEmployee,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error creating employee: ' + error.message });
  }
};

export const employeeController = {
  createEmployee,
};
