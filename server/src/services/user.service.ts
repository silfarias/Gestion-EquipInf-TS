import { UserModel } from "../models/user";
import { hashString } from "../utils/hash";
import { InferCreationAttributes } from "sequelize";
import { createJWT } from "../utils/jwt";
import bcrypt from 'bcrypt';

export class UserService {
    // registro
    // utilizamos infercreationattributes para crear un nuevo registro en la db con los tipos necesarios 
    // especificados en el modelo 
    public async register(user: InferCreationAttributes<UserModel>): Promise<UserModel | void> {
        try {
            if (user.password) {
                const hashPassword = await hashString(user.password);
                user.password = hashPassword;
            }
            return await UserModel.create(user);
        } catch (error) {
            console.error('error al registrar usuario', error);
            throw error;
        }
    }

    // login
    public async login(user_name: string, password: string): Promise<{ message: string, user: Object, token: string } | void> {
        try {
            const user = await UserModel.findOne({ 
                where: { user_name: user_name },
            });
            // console.log(user)
            if (!user) {
                throw new Error('usuario no encontrado')
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw new Error('credenciales invalidas')
            }
            const token = await createJWT({ id: user.id, rol_id: user.rol_id })
            return { message: 'Login correcto, bienvenido', user: { ...user.toJSON() }, token };
        } catch (error) {
            console.log('error al loguear usuario', error);
            throw error;
        }
    }

    public async getAllUsers(): Promise<UserModel[] | void> {
        try {
            const users = await UserModel.findAll();
            if (!users || users.length === 0) {
                throw new Error('no hay usuarios registrados');
            }
            return users;
        } catch (error) {
            console.log('error al obtener usuarios', error);
            throw error;
        }
    }

    public async getUserById(id: number): Promise<UserModel | void> {
        try {
            const user = await UserModel.findByPk(id);
            if (!user) {
                throw new Error('usuario no encontrado')
            }
            return user;
        } catch (error) {
            console.log('error al obtener el usuario', error);
            throw error;
        }
    }

    public async deleteUser(id: number): Promise<{ message: string }> {
        try {
            await UserModel.destroy({ where: { id: id }})
            return { message: 'usuario eliminado'}
        } catch (error) {
            console.log("error al borrar usuario:", error);
            throw error;
        }
    }

    public async updateUser(id: number, userUpdate: Object): Promise<UserModel | void> {
        try {
            const user = await UserModel.findByPk(id);
            if (!user) {
                throw new Error('usuario no encontrado')
            }
            return await user.update(userUpdate)
        } catch (error) {
            console.log('error al editar usuario', error);
            throw error;
        }
    }
};