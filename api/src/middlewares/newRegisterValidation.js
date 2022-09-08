const { body } = require('express-validator');

const newRegisterValidation = [
    body('amount')
        .notEmpty().bail()
        .isNumeric(),
    body('concept')
        .notEmpty().bail()
        .isLength({ min: 2 }),
    body('record_date')
        .notEmpty().bail()
        .isDate(),
    body('type_id')
        .notEmpty().bail()
        .isInt({ min: 1, max: 2 })
]

module.exports = newRegisterValidation;