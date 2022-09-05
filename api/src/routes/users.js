const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const { signInValidation, authorization, authentication } = require('../middlewares');
// const authenticationMiddleware = require('../middlewares/authentication');
// const authorizationMiddleware = require('../middlewares/authorization');
// const { signInValidation, authenticationMiddleware, authorizationMiddleware } = require('../middlewares');





// GET LOGIN TOKEN
router.post('/login', authentication, userController.login)

// READ an user
router.get('/', authorization, userController.get)
// CREATE an user
router.post('/register', signInValidation, userController.register)
// EDIT an user
router.put('/:id', authorization, userController.edit)
// DELETE an user
router.delete('/:id', authorization, userController.delete)
module.exports = router;
