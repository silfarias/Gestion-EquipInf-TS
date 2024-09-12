import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationError } from 'express-validator';

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorDetails = errors.array().map((err: ValidationError) => {
            if ('param' in err) {
                return {
                    param: err.param,
                    msg: err.msg,
                };
            } else {
                return {
                    msg: err.msg,
                };
            }
        });
        return res.status(400).json({
            errors: errorDetails,
        });
    }
    next();
};