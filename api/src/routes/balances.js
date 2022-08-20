const express = require('express');
const router = express.Router();
const balancesController = require('../controllers/balancesController');

// Read by user id
router.get('/user-:id', balancesController.userBalance);
//Create by user id
router.post('/user-:id/new', balancesController.createUserBalance);
//Delete registry
router.delete('/delete/:id', balancesController.destroyUserBalance);
//Edit registry
router.patch('/edit/:id', balancesController.editUserBalance);




module.exports = router;