import express from "express";
import {register} from "../controllers/users/register.js";
import {login} from "../controllers/users/login.js";
import { verifyToken } from "../controllers/users/auth.js";
import { addProduct } from "../controllers/product/addProduct.js";
import { deleteType } from "../controllers/deleteType.js";
import { updateUser } from "../controllers/users/updateUser.js";
import { updateProduct } from "../controllers/product/updateProduct.js";
import { admin } from "../controllers/users/admin.js";


const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/add-product", addProduct);

router.get("/admin", admin);
router.get("/verify-token", verifyToken);
router.get("/delete/:type/:id", deleteType);

router.put("/users/:id", updateUser);
router.put("/products/:id", updateProduct);



export default router;