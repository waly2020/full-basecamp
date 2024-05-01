import express from "express";
import {
  addProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
} from "../controllers/projectControllers/projectControllers";
import { requireAuth } from "../middleware/protectedRoutes/requireAuth";

const router = express.Router();

router.post("/api/v1/projects", requireAuth, addProject);
router.get("/api/v1/projects", requireAuth, getAllProjects);
router.get("/api/v1/project/:id", requireAuth, getProject);
router.put("/api/v1/project/:id", requireAuth, updateProject);
router.delete("/api/v1/project/:id", requireAuth, deleteProject);

export default router;
