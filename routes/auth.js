const express = require('express');
const { registerController, loginController, currentUserController, currentUserTokenController } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router =express.Router();

router.post('/register',registerController);
router.post('/login',loginController);
router.get('/current-user',authMiddleware,currentUserController);
router.get('/token',currentUserTokenController);


module.exports=router;