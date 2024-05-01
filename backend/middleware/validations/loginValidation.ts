import { body } from "express-validator";

export const loginDataValidation = [
  body("email").notEmpty().trim().isEmail().withMessage("Email is not valid"),
  body("password")
    .notEmpty()
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];
