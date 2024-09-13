import { authRoutes } from "./auth.routes";
import { clientRoutes } from "./client.routes";
import { equipRoutes } from "./equip.routes";
import { Router } from "express";

const router = Router()

router.use('/auth', authRoutes);
router.use('/equip', equipRoutes);
router.use('/client', clientRoutes);

export { router }