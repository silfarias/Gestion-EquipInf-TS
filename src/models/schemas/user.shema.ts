import { body, ValidationChain } from 'express-validator';

export const validateUserSchema: ValidationChain[] = [ // tipo que representa una cadena de validaciones
    body('user_name')
        .exists()
        .notEmpty().withMessage('el user_name no debe estar vacío')
        .isString().withMessage('el nombre no es válido'),

    body('email')
        .exists()
        .notEmpty().withMessage("el email no debe estar vacio")
        .isEmail().withMessage("el email no es válido"),

    body('password')
        .exists()
        .notEmpty().withMessage("la contraseña no debe estar vacia")
        .isLength({ min: 8 }).withMessage("la contraseña debe tener al menos 8 carácteres")
        .isString().withMessage('la contraseña no es válida')
]