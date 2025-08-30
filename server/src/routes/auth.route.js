import express from 'express';
import { checkToken, login, logout, signup, updateProfile } from '../controller/auth.controller.js';

const router = express.Router();
router.post("/login",login)
router.post("/signup",signup)
router.get("/check",checkToken)
router.get("/logout",logout)
router.post("/profile",updateProfile)

export default router