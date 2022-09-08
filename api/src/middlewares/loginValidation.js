const { body } = require('express-validator');

const logInValidation = [
    body('username')
        .custom((value, { req }) => {
            if (!value) {
                if (!req.body.email) throw new Error('Is empty');
                return true;
            }
            if (value.length < 2) throw new Error('Invalid value',);

            return true;
        }).bail(),
    body('email')
        .custom((value, { req }) => {
            if (!value) {
                if (!req.body.username) throw new Error('Is empty');
                return true;
            }
            if (value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).length === 0) throw new Error('Invalid value');
            return true;
        }).bail(),

    body('password')
        .notEmpty().bail()
        .isLength({ min: 8 }).bail()

]
module.exports = logInValidation;