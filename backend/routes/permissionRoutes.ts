import express from "express";
import { setAdmin } from "../controllers/permissionControllers/setAdmin";
import { removeAdmin } from "../controllers/permissionControllers/removeAdmin";
import { authRole } from "../middleware/authorization/authRole";
// import { Role } from "@prisma/client";

const router = express.Router();

router.post("/api/v1/permissions/setAdmin/:id", authRole("ADMIN"), setAdmin);
router.post(
  "/api/v1/permissions/removeAdmin/:id",
  authRole("ADMIN"),
  removeAdmin
);

export default router;
