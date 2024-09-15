import { body, ValidationChain } from 'express-validator';

export const valiClientSchema: ValidationChain[] = [
    body('name')
        .exists()
        .notEmpty().withMessage('el nombre no debe estar vacío')
        .isString().withMessage('el nombre no es válido'),
    body('contact_phone')
        .exists()
        .notEmpty().withMessage('el telefono de contacto no debe estar vacío')
        .isNumeric().withMessage('el teléfono de contacto debe contener solo números')
        .isLength({ min: 10, max: 15 }).withMessage('el teléfono debe tener entre 10 y 15 dígitos'),
    body('address')
        .exists()
        .notEmpty().withMessage("la dirección no debe estar vacia")
        .isString().withMessage('la dirección no es válida')
]