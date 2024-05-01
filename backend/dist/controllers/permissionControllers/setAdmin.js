"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAdmin = void 0;
const db_server_1 = require("../../db.server");
const client_1 = require("@prisma/client");
const setAdmin = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        await db_server_1.db.user.update({
            where: { id },
            data: { role: client_1.Role.ADMIN },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });
        res.status(200).json({ message: "Admin updated" });
    }
    catch (err) {
        console.error(err);
    }
};
exports.setAdmin = setAdmin;
