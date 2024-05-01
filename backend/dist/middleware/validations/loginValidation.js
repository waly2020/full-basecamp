"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginDataValidation = void 0;
const express_validator_1 = require("express-validator");
exports.loginDataValidation = [
    (0, express_validator_1.body)("email").notEmpty().trim().isEmail().withMessage("Email is not valid"),
    (0, express_validator_1.body)("password")
        .notEmpty()
        .trim()
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long"),
];
