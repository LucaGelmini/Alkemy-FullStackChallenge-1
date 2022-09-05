const { body } = require('express-validator');

const signInValidation = [
    body('name')
        .notEmpty().bail()
        .isLength({ min: 2 }),
    body('family-name')
        .notEmpty().bail()
        .isLength({ min: 2 }),
    body('username')
        .notEmpty(),
    body('email')
        .notEmpty().bail()
        .isEmail(),
    body('password')
        .notEmpty().bail()
        .isLength({ min: 8 }).bail()
    // .isStrongPassword()
    ,
    body('confirmPassword')
        .notEmpty()
        .custom((value, { req }) => {
            if (value != req.password) throw new Error("confirmed password doesn't match");
            return true
        }),
    // body('userfile')
    //     .custom((value, { req }) => {
    //         let file = req.file;
    //         let extensionAccepted = ['.jpg', '.jpeg', '.png', '.gif'];
    //         if (!file) {
    //             throw new Error('A profile picture is required') //si no te envian un file --> mostrar mensaje
    //         } else {
    //             let extensionFile = path.extname(file.originalname);
    //             if (!extensionAccepted.includes(extensionFile)) {
    //                 throw new Error(`The allowed extentiones are: ${extensionAccepted.join(', ')}`);
    //             }
    //         }
    //         return true
    //     })
]

module.exports = signInValidation;