"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = void 0;
const express_validator_1 = require("express-validator");
const db_server_1 = require("../../db.server");
const bcrypt_1 = __importDefault(require("bcrypt"));
const logIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        // We first check if there's some error in the request body
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty())
            return res.status(200).json({ errors: errors.array() });
        // if no error, we check if a user with this email exists
        const userExists = await db_server_1.db.user.findUnique({
            where: {
                email,
            },
        });
        if (!userExists)
            return res.status(404).json({ message: "User not found" });
        // The user exists, we check if the provided password matches with the one in the database
        const isMatch = await bcrypt_1.default.compare(password, userExists.password);
        if (!isMatch)
            return res.status(404).json({ message: "Password does not match" });
        const userWithoutPassword = {
            id: userExists.id,
            name: userExists.name,
            email: userExists.email,
            role: userExists.role,
        };
        // If there's a match, we assign the session
        req.session.user = userWithoutPassword;
        res.status(200).json({ message: "Successfully connected", data: userWithoutPassword });
        // Next, we redirect the user to its profile page
        // return res.redirect("/profile");
    }
    catch (error) {
        console.log(error);
    }
};
exports.logIn = logIn;
