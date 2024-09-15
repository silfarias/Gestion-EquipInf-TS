import { authRoutes } from "./auth.routes";
import { clientRoutes } from "./client.routes";
import { equipRoutes } from "./equip.routes";
import { invRoutes } from "./inventory.routes";
import { purchRoutes } from "./purchase.routes";
import { Router } from "express";

const router = Router()

router.use('/auth', authRoutes);
router.use('/equip', equipRoutes);
router.use('/client', clientRoutes);
router.use('/inventory', invRoutes);
router.use('/purchase', purchRoutes);

export { router }