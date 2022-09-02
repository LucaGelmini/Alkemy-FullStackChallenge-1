const express = require('express');
const router = express.Router();
const balancesController = require('../controllers/balancesController');

// Read by user id
router.get('/get', balancesController.userBalance);
//Create by user id
router.post('/new', balancesController.createUserBalance);
//Delete registry
router.delete('/delete/:id', balancesController.destroyUserBalance);
//Edit registry
router.put('/edit/:id', balancesController.editUserBalance);




module.exports = router;