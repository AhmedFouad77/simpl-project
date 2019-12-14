const express = require('express');
const router = express.Router();
const userCon = require('../controller/user.controller');

router.get('/', userCon.getAllUsers);

router.get('/user/:id', userCon.getUser);

router.post('/add', userCon.addUser);

router.put('/update/:idUser', userCon.updateUser);

router.delete('/delete/:id', userCon.deleteUser);


module.exports = router;