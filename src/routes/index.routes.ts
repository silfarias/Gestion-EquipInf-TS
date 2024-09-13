import { authRoutes } from "./auth.routes";
import { equipRoutes } from "./equip.routes";
import { Router } from "express";

const router = Router()

router.use('/auth', authRoutes);
router.use('/equip', equipRoutes);

export { router }