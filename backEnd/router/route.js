import express from "express";
import {register} from "../controllers/users/register.js";
import {login} from "../controllers/users/login.js";
import { verifyToken } from "../controllers/users/auth.js";
import { addProduct } from "../controllers/product/addProduct.js";


const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/verify-token", verifyToken);

router.post("/add-product", addProduct)


export default router;