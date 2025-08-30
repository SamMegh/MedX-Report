import express from 'express';
import { check, login, logout, profile, signup } from '../controller/auth.controller.js';

const router = express.Router();
router.get("/login",login)
router.get("/signup",signup)
router.get("/check",check)
router.get("/logout",logout)
router.get("/profile",profile)

export default router