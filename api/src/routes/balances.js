const express = require('express');
const router = express.Router();
const balancesController = require('../controllers/balancesController');

// Read by user id
router.post('/user-:id', balancesController.userBalance);
//Create by user id
router.post('/user-:id/new', balancesController.createUserBalance);
//Edit registry

//Delete registry




module.exports = router;