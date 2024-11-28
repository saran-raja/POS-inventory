import { Request, Response } from 'express';
import Role from '../models/role';

const newRole = async (req: Request, res: Response) => {
  try {
    const newRole = await Role.create({ roleName: req.body.roleName });

    res
      .status(201)
      .json({ message: 'Role created successfully!', role: newRole });
  } catch (error) {
    res.status(500).json({ message: 'Error creating role: ', error });
  }
};

export const roleController = {
  newRole,
};
