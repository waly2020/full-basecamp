import express from "express";
import { signUp } from "../controllers/authControllers/signUp";
import { logIn } from "../controllers/authControllers/login";
import { logOut } from "../controllers/authControllers/logOut";
import {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} from "../controllers/userControllers/userControllers";
import { signUpDataValidation } from "../middleware/validations/signUpValidation";
import { loginDataValidation } from "../middleware/validations/loginValidation";
import { requireAuth } from "../middleware/protectedRoutes/requireAuth";

const router = express.Router();

router.post("/api/v1/users/register", signUpDataValidation, signUp); //sign up a user
router.post("/api/v1/users/login", loginDataValidation, logIn); // Log in a user
router.post("/api/v1/users/logOut", requireAuth, logOut); // Log out a user
router.get("/api/v1/users", requireAuth, getAllUsers); // Get all users
router.get("/api/v1/user/:id", requireAuth, getUserById); // Get a user by id
router.delete("/api/v1/user/:id", requireAuth, deleteUserById); // Delete a user
router.put("/api/v1/user/:id", requireAuth, updateUserById); // Update a user
router.get("/",(req,res) =>{
  res.send("Welcome")
})

export default router;
