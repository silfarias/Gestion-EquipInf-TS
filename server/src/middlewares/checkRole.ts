import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
    user?: { rol_id: number };
}

export const checkRole = (requiredRoleId: number) => {
    return (req: CustomRequest, res: Response, next: NextFunction) => {
        const user = req.user;
        // console.log(req.user);
        if (!user || user.rol_id !== requiredRoleId) {
            // console.log(user?.rol_id)
            return res.status(403).json({ message: 'Acceso denegado: no tienes permisos suficientes' });
        }
        next();
    };
};
