import { UserController } from "../controllers/user.controller";
import { Router } from "express";
import { validateUserSchema } from "../models/schemas/user.shema";
import { handleValidationErrors } from "../middlewares/validateResults";

const authRoutes = Router();
const userCtrl = new UserController;

authRoutes.post('/register', validateUserSchema, handleValidationErrors, userCtrl.register);
authRoutes.post('/login', userCtrl.login);

export { authRoutes }