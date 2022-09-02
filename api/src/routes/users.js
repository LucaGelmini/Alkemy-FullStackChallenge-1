const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');



// GET LOGIN TOKEN
router.post('/login', authenticationMiddleware, userController.login)

// READ an user
router.get('/', authorizationMiddleware, userController.get)
// CREATE an user
router.post('/register', authorizationMiddleware, userController.register)
// EDIT an user
router.put('/:id', authorizationMiddleware, userController.edit)
// DELETE an user
router.delete('/:id', authorizationMiddleware, userController.delete)
module.exports = router;
