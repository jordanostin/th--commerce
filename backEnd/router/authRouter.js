import express from "express";
import {register} from "../controllers/users/register.js";
import {login} from "../controllers/users/login.js";
import { verifyToken } from "../controllers/users/auth.js";
import { updateUser } from "../controllers/users/updateUser.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/verify-token", verifyToken);
router.put("/users/:id", updateUser);



export default router;