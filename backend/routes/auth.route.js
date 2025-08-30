// import { isAuth } from '../middlewares/isAuth.js';
import express from 'express';
import {
    getUserData,
    login,
    logout,
    register
} from '../controllers/auth.controller.js';
import { isAuth } from '../middlewares/isAuth.js';
const authRouter = express.Router();

authRouter.post('/register', register);

authRouter.post('/login', login);

authRouter.post('/logout', isAuth, logout);

authRouter.get('/getUserData', isAuth ,getUserData);


export default authRouter;