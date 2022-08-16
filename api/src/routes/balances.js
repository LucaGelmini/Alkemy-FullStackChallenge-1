const express = require('express');
const router = express.Router();
const db = require('../database/models')

router.get('/user-:id', (req,res)=>{
    res.send(req.params.id)
})


module.exports = router;