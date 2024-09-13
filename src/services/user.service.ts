import { UserModel } from "../models/user";
import { hashString } from "../utils/hash";
import { InferCreationAttributes } from "sequelize";
import { createJWT } from "../utils/jwt";
import bcrypt from 'bcrypt';

export class UserService {
    // constructor () {}
    
    // registro
    // utilizamos infercreationattributes para crear un nuevo registro en la db con los tipos necesarios 
    // especificados en el modelo 
    async register(user: InferCreationAttributes<UserModel>): Promise<UserModel | void> {
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
    async login(user_name: string, password: string) {
        try {
            const user = await UserModel.findOne({ 
                where: { user_name: user_name },
                // include: ['RolModel']
            });
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

    async getAllUsers() {
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

    async getUserById(id: number) {
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

    async deleteUser(id: number) {
        try {
            await UserModel.destroy({ where: { id: id }})
            return { message: 'usuario eliminado'}
        } catch (error) {
            console.log("error al borrar usuario:", error);
            throw error;
        }
    }

    async updateUser(id: number, userUpdate: Object) {
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
}