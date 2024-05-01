"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAdmin = void 0;
const db_server_1 = require("../../db.server");
// import { Role } from "@prisma/client";
const removeAdmin = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        await db_server_1.db.user.update({
            where: { id },
            data: { role: "USER" },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });
        res.status(200).json({ message: "User updated" });
    }
    catch (err) {
        console.error(err);
    }
};
exports.removeAdmin = removeAdmin;
