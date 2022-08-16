const express = require('express');
const router = express.Router();
const db = require('../database/models')

/* GET users listing. */
router.get('/', (req, res)=> res.send('Users API - endpoints:\n<ul><li><a href="http://localhost:3000/users/findall">findall</a></li></ul>'))

router.get('/findall', async function(req, res) {
  const users = await db.User.findAll()
  res.status(200).json({data: users, status: 200})
});

router.get('/:id', async function(req, res){
  const id = req.params.id;
  const user = await db.User.findByPk(id)
  res.status(200).json({data: user, status: 200})
})
module.exports = router;
