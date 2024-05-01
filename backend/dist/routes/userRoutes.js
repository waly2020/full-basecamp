"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signUp_1 = require("../controllers/authControllers/signUp");
const login_1 = require("../controllers/authControllers/login");
const logOut_1 = require("../controllers/authControllers/logOut");
const userControllers_1 = require("../controllers/userControllers/userControllers");
const signUpValidation_1 = require("../middleware/validations/signUpValidation");
const loginValidation_1 = require("../middleware/validations/loginValidation");
const requireAuth_1 = require("../middleware/protectedRoutes/requireAuth");
const router = express_1.default.Router();
router.post("/api/v1/users/register", signUpValidation_1.signUpDataValidation, signUp_1.signUp); //sign up a user
router.post("/api/v1/users/login", loginValidation_1.loginDataValidation, login_1.logIn); // Log in a user
router.post("/api/v1/users/logOut", requireAuth_1.requireAuth, logOut_1.logOut); // Log out a user
router.get("/api/v1/users", requireAuth_1.requireAuth, userControllers_1.getAllUsers); // Get all users
router.get("/api/v1/user/:id", requireAuth_1.requireAuth, userControllers_1.getUserById); // Get a user by id
router.delete("/api/v1/user/:id", requireAuth_1.requireAuth, userControllers_1.deleteUserById); // Delete a user
router.put("/api/v1/user/:id", requireAuth_1.requireAuth, userControllers_1.updateUserById); // Update a user
router.get("/", (req, res) => {
    res.send("Welcome");
});
exports.default = router;
