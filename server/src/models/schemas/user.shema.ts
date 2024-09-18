import { body, param, ValidationChain } from 'express-validator';

export const validateUserSchema: ValidationChain[] = [
    // param('rol_id')
    //     .exists({ checkNull: true, checkFalsy: true }).withMessage('El ID del rol es obligatorio.')
    //     .isNumeric().withMessage('El ID del rol debe ser un número.'),
        
    body('user_name')
        .exists({ checkNull: true, checkFalsy: true }).withMessage('El nombre de usuario es obligatorio.')
        .isString().withMessage('El nombre de usuario debe ser una cadena de texto.')
        .notEmpty().withMessage('El nombre de usuario no debe estar vacío.'),
    
    body('email')
        .exists({ checkNull: true, checkFalsy: true }).withMessage('El email es obligatorio.')
        .isEmail().withMessage('El email debe ser válido.')
        .normalizeEmail(),

    body('password')
        .exists({ checkNull: true, checkFalsy: true }).withMessage('La contraseña es obligatoria.')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres.')
        .isString().withMessage('La contraseña debe ser una cadena de texto.')
];

export const validateLoginUser: ValidationChain[] = [
    body('user_name')
        .exists()
        .notEmpty().withMessage('el user_name no debe estar vacío')
        .isString().withMessage('el user_name no es válido'),
    body('password')
        .exists()
        .notEmpty().withMessage("la contraseña no debe estar vacia")
        .isLength({ min: 8 }).withMessage("la contraseña debe tener al menos 8 carácteres")
        .isString().withMessage('la contraseña no es válida')
]