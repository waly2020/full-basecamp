import { Request, Response } from "express";
import { db } from "../../db.server";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
// import { Role } from "@prisma/client";

export const signUp = async (req: Request, res: Response) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(200).json({ errors: errors.array() });
    // We check if both provided passwords are the same
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }
    // Then we check if the user already exists
    const userExists = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });
    // The user doesn't already exists, we hash the password before registration to the database
    const hashedPassword = await bcrypt.hash(password, 10); // We hash the password

    // We create the user in the database
    const user = await db.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        role: "USER",
      },
    });

    return res.status(201).json({
      message: "User created successfully",
      user : {
        id : user.id,
        name : user.name,
        email : user.email,
        role : user.role
      }
    });
  } catch (error) {
    console.log(error);
  }
};
