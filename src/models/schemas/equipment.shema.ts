import { body, ValidationChain } from 'express-validator';

export const valiEquipSchema: ValidationChain[] = [ // tipo que representa una cadena de validaciones
    body('serial_number')
        .exists()
        .notEmpty().withMessage('el numero de serie no debe estar vacío')
        .isInt().withMessage('el numero de serie no es entero')
        .isLength({ min: 6, max: 6 }).withMessage('el numero de serie debe tener 6 digitos exactos'),

    body('model')
        .exists()
        .notEmpty().withMessage('el nombre del modelo no debe estar vacío')
        .isString().withMessage('el nombre del modelo no es válido'),

    body('mark')
        .exists()
        .notEmpty().withMessage('la marca no debe estar vacía')
        .isString().withMessage('la marca no es válida'),

    body('date_acquisition')
        .exists()
        .notEmpty().withMessage('la fecha de adquisición no debe estar vacia')
        .isDate().withMessage('la fecha de adquisición no es valida'),

    body('location')
        .exists()
        .notEmpty().withMessage('la ubicación no debe estar vacia')
        .isString().withMessage('la ubicación no es valida'),

    body('state')
        .exists()
        .notEmpty().withMessage('el estado no debe estar vacio')
        .isString().withMessage('el estado no es valido'),

    body('stock_total')
        .exists()
        .notEmpty().withMessage('el stock total no debe estar vacio')
        .isInt().withMessage('el stock total no es entero')
]