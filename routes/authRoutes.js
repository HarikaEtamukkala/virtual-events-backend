import { Router } from "express";
import {AuthController} from '../controllers/authController.js';

const authRoutes = Router();

authRoutes.post('/register', AuthController.registerUser);

authRoutes.post('/login',AuthController.loginUser);

export default authRoutes;