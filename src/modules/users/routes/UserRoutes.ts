import { Router } from 'express';
import UsersController from '../controllers/UsersControllers';
import { createUserSchema } from '../schemas/UserSchemas';
import AuthMiddleware from '@shared/middlewares/authMiddleware';

const userRouter = Router();
const usersController = new UsersController();

userRouter.get('/', AuthMiddleware.excute, usersController.list);
userRouter.post('/', createUserSchema, usersController.create);

export default userRouter;
