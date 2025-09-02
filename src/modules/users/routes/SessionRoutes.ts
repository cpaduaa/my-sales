import { Router } from 'express';
import SessionsController from '../controllers/SessionsControllers';
import { sessionSchema } from '../schemas/sessionSchema';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', sessionSchema, sessionsController.create);

export default sessionsRouter;
