import express from 'express';
import { testController, registerController, loginController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
const router = express.Router()

//routing
//REGISTER ||  METHOD POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login', loginController)

//test routes
router.get('/test',requireSignIn,isAdmin, testController)

export default router;