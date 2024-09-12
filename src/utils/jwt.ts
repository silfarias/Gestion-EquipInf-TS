import { envConfig } from "../config/environments";
import jwt, { JwtPayload, JsonWebTokenError } from "jsonwebtoken";

export const createJWT = (payload: JwtPayload): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (!envConfig.secretKey) {
            return reject(new JsonWebTokenError('No hay una llave secreta'))
        }
        jwt.sign(payload, envConfig.secretKey, (err, token) => {
            if (err) {
                reject(err)
            } else if (token) {
                resolve(token)
            }
        })
    })
}