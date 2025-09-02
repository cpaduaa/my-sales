import { productsRouter } from '@modules/products/routes/Productroutes';
import avatarRouter from '@modules/users/routes/AvatarRoutes';
import sessionsRouter from '@modules/users/routes/SessionRoutes';
import usersRouter from '@modules/users/routes/UserRoutes';
import { Router, static as expressStatic } from 'express';
import uploadConfig from '@config/upload';

const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({ message: 'Hello Dev! I am Alive' });
});

routes.use('products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/avatar', avatarRouter);
routes.use('/files', expressStatic(uploadConfig.directory))

export default routes;
