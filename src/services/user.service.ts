import { UserModel } from "../models/user";
import { hashString } from "../utils/hash";


export class UserService {
    async register(user: Object): Promise<UserModel | void> {
        try {
            const hashPassword = await hashString(user.password);
            user.password = hashPassword;
            return await UserModel.create({ user });
        } catch (error) {
            console.log(error);
        }
    }
}
    // async login(email: string, password: string) {
    //     const user = await UserModel.findOne({ where: { email, password } } );
    //     return user;
    // }
