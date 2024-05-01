"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpDataValidation = void 0;
const express_validator_1 = require("express-validator");
exports.signUpDataValidation = [
    (0, express_validator_1.body)("name")
        .notEmpty()
        .trim()
        .isString()
        .escape()
        .withMessage("Name is required"),
    (0, express_validator_1.body)("email")
        .notEmpty()
        .trim()
        .isString()
        .isEmail()
        .escape()
        .withMessage("Email is invalid"),
    (0, express_validator_1.body)("password")
        .notEmpty()
        .trim()
        .escape()
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long"),
    (0, express_validator_1.body)("confirmPassword")
        .custom((value, { req }) => value === req.body.password)
        .withMessage("Passwords do not match"),
];
