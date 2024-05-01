"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectDataValidation = void 0;
const express_validator_1 = require("express-validator");
exports.projectDataValidation = [
    (0, express_validator_1.body)("name")
        .notEmpty()
        .trim()
        .isString()
        .withMessage("Please enter a project name"),
    (0, express_validator_1.body)("description")
        .notEmpty()
        .trim()
        .isString()
        .withMessage("Please enter a project description"),
];
