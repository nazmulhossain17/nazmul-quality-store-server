import express from "express";
import {loginController, registerController} from '../controllers/authController.js';
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router()


router.post('/register', registerController)

router.post('/login', loginController)

router.get('/test', requireSignIn, testController)


export default router;