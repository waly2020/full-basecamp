"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRole = void 0;
// import { Role } from "@prisma/client";
const authRole = (role) => {
    return (req, res, next) => {
        if (req.session.user?.role === role) {
            next();
        }
        else {
            return res.sendStatus(403);
        }
    };
};
exports.authRole = authRole;
