import express from "express";
import {register} from "../controllers/users/register.js";
import {login} from "../controllers/users/login.js";


const router = express.Router();

router.post("/login", login);
router.post("/register", register);

export default router;