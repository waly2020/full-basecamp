import { body } from "express-validator";

export const signUpDataValidation = [
  body("name")
    .notEmpty()
    .trim()
    .isString()
    .escape()
    .withMessage("Name is required"),
  body("email")
    .notEmpty()
    .trim()
    .isString()
    .isEmail()
    .escape()
    .withMessage("Email is invalid"),
  body("password")
    .notEmpty()
    .trim()
    .escape()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  body("confirmPassword")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords do not match"),
];
