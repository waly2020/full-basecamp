"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectControllers_1 = require("../controllers/projectControllers/projectControllers");
const requireAuth_1 = require("../middleware/protectedRoutes/requireAuth");
const router = express_1.default.Router();
router.post("/api/v1/projects", requireAuth_1.requireAuth, projectControllers_1.addProject);
router.get("/api/v1/projects", requireAuth_1.requireAuth, projectControllers_1.getAllProjects);
router.get("/api/v1/project/:id", requireAuth_1.requireAuth, projectControllers_1.getProject);
router.put("/api/v1/project/:id", requireAuth_1.requireAuth, projectControllers_1.updateProject);
router.delete("/api/v1/project/:id", requireAuth_1.requireAuth, projectControllers_1.deleteProject);
exports.default = router;
