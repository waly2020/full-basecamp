"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const setAdmin_1 = require("../controllers/permissionControllers/setAdmin");
const removeAdmin_1 = require("../controllers/permissionControllers/removeAdmin");
const authRole_1 = require("../middleware/authorization/authRole");
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.post("/api/v1/permissions/setAdmin/:id", (0, authRole_1.authRole)(client_1.Role.ADMIN), setAdmin_1.setAdmin);
router.post("/api/v1/permissions/removeAdmin/:id", (0, authRole_1.authRole)(client_1.Role.ADMIN), removeAdmin_1.removeAdmin);
exports.default = router;
