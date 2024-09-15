import { body, param, ValidationChain } from 'express-validator';

export const validateCreatePurchase: ValidationChain[] = [
    param('equipment_id')
        .exists()
        .notEmpty().withMessage('El ID del equipo es requerido')
        .isNumeric().withMessage('El ID del equipo debe ser un número'),

    body('client_id')
        .exists()
        .notEmpty().withMessage('El ID del cliente es requerido')
        .isNumeric().withMessage('El ID del cliente debe ser un número'),

    body('quantity')
        .exists()
        .notEmpty().withMessage('La cantidad es requerida')
        .isInt({ min: 1 }).withMessage('La cantidad debe ser un número entero mayor a 0')
];
