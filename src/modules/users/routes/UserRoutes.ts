import { Router } from 'express';
import UsersController from '../controllers/UsersControllers';
import { createUserSchema } from '../schemas/UserSchemas';

const userRouter = Router();
const usersController = new UsersController();

userRouter.get('/', usersController.list);
userRouter.post('/', createUserSchema, usersController.create);

export default userRouter;
