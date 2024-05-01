import { body } from "express-validator";

export const projectDataValidation = [
  body("name")
    .notEmpty()
    .trim()
    .isString()
    .withMessage("Please enter a project name"),
  body("description")
    .notEmpty()
    .trim()
    .isString()
    .withMessage("Please enter a project description"),
];
