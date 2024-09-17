import { body, ValidationChain } from 'express-validator';

export const valiEquipSchema: ValidationChain[] = [
    body('description')
        .isString().withMessage('la descripcion debe ser una cadena de caracteres'),
    body('model')
        .exists()
        .notEmpty().withMessage('el nombre del modelo no debe estar vacío')
        .isString().withMessage('el nombre del modelo no es válido'),
    body('mark')
        .exists()
        .notEmpty().withMessage('la marca no debe estar vacía')
        .isString().withMessage('la marca no es válida'),
    body('state')
        .exists()
        .notEmpty().withMessage('el estado no debe estar vacio')
        .isString().withMessage('el estado no es valido'),
]