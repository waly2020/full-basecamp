"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const requireAuth = (req, res, next) => {
    if (req.session && req.session.user) {
        next();
    }
    else {
        return res.status(401).json({ message: "Not allowed" });
    }
};
exports.requireAuth = requireAuth;
