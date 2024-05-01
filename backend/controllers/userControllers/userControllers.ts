import { Request, Response } from "express";
import { db } from "../../db.server";

// Get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    !users ? res.status(404) : res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

// Get a user by its ID
export const getUserById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  if (typeof userId !== "number") return;

  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    !user
      ? res.status(404).json({ message: "User not found" })
      : res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

// Delete a user by ID

export const deleteUserById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  if (typeof userId !== "number") return;

  try {
    await db.user.delete({
      where: { id: userId },
    });
    return res.status(200).json({ message: "User successfully deleted" });
  } catch (error) {
    console.log(error);
  }
};

// Update a user

export const updateUserById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  if (typeof userId !== "number") return;

  try {
    const user = await db.user.update({
      where: { id: userId },
      data: req.body,
    });

    !user
      ? res.status(404).json({ message: "User not found" })
      : res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
