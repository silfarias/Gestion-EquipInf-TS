import jwt, { JwtPayload } from 'jsonwebtoken';
import { envConfig } from '../config/environments';
import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
    user?: JwtPayload;
}

export const authentication = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'acceso no autorizado'});
    }
    const token = authHeader.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ message: 'token inválido' })
    } 
    jwt.verify(token, envConfig.secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'ha ocurrido un error en la autenticación' })
        }
        req.user = decoded as JwtPayload & {rol_id: number};
        next();
    })
}