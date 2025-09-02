import express from 'express';
import { checkToken, login, logout, signup, updateProfile } from '../controller/auth.controller.js';
import Protection from '../mid-layer/protection.js';

const router = express.Router();
router.post("/login", login)
router.post("/signup", signup)
router.get("/check", Protection, checkToken)
router.get("/logout", Protection, logout)
router.post("/profile", Protection, updateProfile)

export default router