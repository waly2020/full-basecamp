"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.deleteUserById = exports.getUserById = exports.getAllUsers = void 0;
const db_server_1 = require("../../db.server");
// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await db_server_1.db.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });
        !users ? res.status(404) : res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getAllUsers = getAllUsers;
// Get a user by its ID
const getUserById = async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    if (typeof userId !== "number")
        return;
    try {
        const user = await db_server_1.db.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });
        !user
            ? res.status(404).json({ message: "User not found" })
            : res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getUserById = getUserById;
// Delete a user by ID
const deleteUserById = async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    if (typeof userId !== "number")
        return;
    try {
        await db_server_1.db.user.delete({
            where: { id: userId },
        });
        return res.status(200).json({ message: "User successfully deleted" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteUserById = deleteUserById;
// Update a user
const updateUserById = async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    if (typeof userId !== "number")
        return;
    try {
        const user = await db_server_1.db.user.update({
            where: { id: userId },
            data: req.body,
        });
        !user
            ? res.status(404).json({ message: "User not found" })
            : res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
    }
};
exports.updateUserById = updateUserById;
