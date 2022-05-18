const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/user.controllers');

// Criar 'User': (POST): localhost:3000/api/v1/register
router.post('/register', userController.registerNewUser);

// login 'User': (POST): localhost:3000/api/v1/login
router.post('/login', userController.loginUser);

// profile do 'User': (GET): localhost:3000/api/v1/userProfile
router.get('/userProfile', auth, userController.returnUserProfile); 

//Deletar user: (DELETE): localhost:3000/api/v1/userProfile
//router.delete('/userDelete', auth, userController.returnUserDelete);

module.exports = router