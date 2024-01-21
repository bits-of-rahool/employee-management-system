import { loginUser,registerUser,logoutUser } from "../controllers/userController.js";
import {Router} from "express"

const router  = Router();

router.post("/login",loginUser);
router.post("/register",registerUser);
router.post("/logout",logoutUser);


export default router;
