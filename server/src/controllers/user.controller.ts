import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { handleControllerError } from "../utils/errorHandler"; 

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public register = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { rol_id } = req.params;
            const userData = req.body;
            userData.rol_id = Number(rol_id);
            const user = await this.userService.register(userData);
            return res.status(201).json(user);
        } catch (error) {
            return handleControllerError(error, res); 
        }
    }

    public login = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { user_name, password } = req.body;
            const user = await this.userService.login(user_name, password);
            return res.status(200).json(user);
        } catch (error) {
            return handleControllerError(error, res);
        }
    }

    public getAllUsers = async (req: Request, res: Response): Promise<Response> => {
        try {
            const users = await this.userService.getAllUsers();
            return res.status(200).json(users);
        } catch (error) {
            return handleControllerError(error, res);
        }
    }

    public getUserById = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const user = await this.userService.getUserById(Number(id));
            return res.status(200).json(user);
        } catch (error) {
            return handleControllerError(error, res);
        }
    }

    public deleteUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            await this.userService.deleteUser(Number(id));
            return res.status(204).send();
        } catch (error) {
            return handleControllerError(error, res);
        }
    }

    public updateUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const userUpdate = req.body;
            const user = await this.userService.updateUser(Number(id), userUpdate);
            return res.status(200).json(user);
        } catch (error) {
            return handleControllerError(error, res);
        }
    }
}