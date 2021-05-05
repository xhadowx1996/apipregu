const { Router } = require('express');
const router = Router();

const { getUsers, CreateUsers, getUserByid, deleteUsers,updateUsers} = require('../Controllers/index.controllers.js')


router.get('/users',getUsers);
router.get('/users/:id',getUserByid);
router.post('/users',CreateUsers);
router.delete('/users/:id',deleteUsers)
router.put('/users/:id',updateUsers)

module.exports = router;
