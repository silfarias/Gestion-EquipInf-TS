import { UserController } from "../controllers/user.controller";
import { Router } from "express";
import { validateUserSchema } from "../models/schemas/user.shema";
import { handleValidationErrors } from "../middlewares/validateResults";
import { authentication } from "../middlewares/authentication";

const authRoutes = Router();
const userCtrl = new UserController();

authRoutes.post('/register/:rol_id', validateUserSchema, handleValidationErrors, userCtrl.register);
authRoutes.post('/login', userCtrl.login);
authRoutes.get('/all-users', authentication, userCtrl.getAllUsers);
authRoutes.get('/user/:id', authentication, userCtrl.getUserById);
authRoutes.put('/update/:id', authentication, userCtrl.updateUser);
authRoutes.delete('/delete/:id', authentication, userCtrl.deleteUser);

export { authRoutes }