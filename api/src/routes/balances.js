const express = require('express');
const router = express.Router();
const balancesController = require('../controllers/balancesController');

// Read by user id
router.get('/user-:id', balancesController.userBalance);
//Create by user id
router.post('/user-:userId/new', balancesController.createUserBalance);
//Delete registry
router.delete('/user-:userId/delete/:id', balancesController.destroyUserBalance);
//Edit registry
router.put('/user-:userId/edit/:id', balancesController.editUserBalance);




module.exports = router;