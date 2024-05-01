"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const db_server_1 = require("../../db.server");
const bcrypt_1 = __importDefault(require("bcrypt"));
const express_validator_1 = require("express-validator");
// import { Role } from "@prisma/client";
const signUp = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty())
            return res.status(200).json({ errors: errors.array() });
        // We check if both provided passwords are the same
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match",
            });
        }
        // Then we check if the user already exists
        const userExists = await db_server_1.db.user.findUnique({
            where: {
                email: email,
            },
        });
        if (userExists)
            return res.status(400).json({ message: "User already exists" });
        // The user doesn't already exists, we hash the password before registration to the database
        const hashedPassword = await bcrypt_1.default.hash(password, 10); // We hash the password
        // We create the user in the database
        const user = await db_server_1.db.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                role: "USER",
            },
        });
        return res.status(201).json({
            message: "User created successfully",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.signUp = signUp;
