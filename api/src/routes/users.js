const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController')
const authMiddleware = require('../middlewares/auth')


// GET LOGIN TOKEN
router.post('/login', authMiddleware, userController.login)
// READ an user
router.get('/', userController.get)
// CREATE an user
router.post('/register', userController.register)
// EDIT an user
router.put('/:id', userController.edit)
// DELETE an user
router.delete('/:id', userController.delete)
module.exports = router;
