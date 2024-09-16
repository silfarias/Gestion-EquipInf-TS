import { body, param, ValidationChain } from 'express-validator';

export const valiEquipSchema: ValidationChain[] = [
    param('category_id')
        .exists()
        .notEmpty().withMessage('el ID de la categoria es requerido')
        .isNumeric().withMessage('el ID de la categoria debe ser un número'),
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