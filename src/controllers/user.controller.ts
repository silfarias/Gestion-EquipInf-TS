import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { handleControllerError } from "../utils/errorHandler"; 

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async register(req: Request, res: Response): Promise<Response> {
        try {
            const user = await this.userService.register(req.body);
            return res.status(201).json(user);
        } catch (error) {
            return handleControllerError(error, res); 
        }
    }

    async login(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;
            const user = await this.userService.login(email, password);
            return res.status(200).json(user);
        } catch (error) {
            return handleControllerError(error, res);
        }
    }

    async getAllUsers(req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.userService.getAllUsers();
            return res.status(200).json(users);
        } catch (error) {
            return handleControllerError(error, res);
        }
    }

    async getUserById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const user = await this.userService.getUserById(Number(id));
            return res.status(200).json(user);
        } catch (error) {
            return handleControllerError(error, res);
        }
    }

    async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            await this.userService.deleteUser(Number(id));
            return res.status(204).send();
        } catch (error) {
            return handleControllerError(error, res);
        }
    }

    async updateUser(req: Request, res: Response): Promise<Response> {
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