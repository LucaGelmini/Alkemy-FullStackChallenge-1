const { body } = require('express-validator');

const editRegisterValidation = [
    body('amount')
        .notEmpty().bail(),
    body('concept')
        .notEmpty().bail()
        .isLength({ min: 2 }),
    body('record_date')
        .notEmpty().bail()
        .isDate(),
]

module.exports = editRegisterValidation;