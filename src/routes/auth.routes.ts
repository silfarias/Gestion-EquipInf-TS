import { UserController } from "../controllers/user.controller";
import { Router } from "express";
import { validateUserSchema } from "../models/schemas/user.shema";
import { handleValidationErrors } from "../middlewares/validateResults";
import { authentication } from "../middlewares/authentication";
import { checkRole } from "../middlewares/checkRole";

const authRoutes = Router();
const userCtrl = new UserController();

authRoutes.post('/register/:rol_id', validateUserSchema, handleValidationErrors, userCtrl.register);
authRoutes.post('/login', userCtrl.login);
authRoutes.get('/', authentication, userCtrl.getAllUsers);
authRoutes.get('/:id', authentication, userCtrl.getUserById);
authRoutes.put('/:id', authentication, checkRole(1), userCtrl.updateUser);
authRoutes.delete('/:id', authentication, checkRole(1) ,userCtrl.deleteUser);

export { authRoutes }