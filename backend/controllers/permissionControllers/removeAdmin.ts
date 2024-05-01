import { Request, Response } from "express";
import { db } from "../../db.server";
// import { Role } from "@prisma/client";

export const removeAdmin = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    await db.user.update({
      where: { id },
      data: { role: "USER" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    res.status(200).json({ message: "User updated" });
  } catch (err) {
    console.error(err);
  }
};
