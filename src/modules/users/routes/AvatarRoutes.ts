import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload'
import UpdateAvatarControllers from '../controllers/UpdateAvatarControllers';
import AuthMiddleware from '@shared/middlewares/authMiddleware';


const avatarRouter = Router()
const userAvatarController = new UpdateAvatarControllers();
const upload = multer(uploadConfig);

avatarRouter.patch(
  '/',
  AuthMiddleware.excute,
  upload.single('avatar'),
  userAvatarController.update
);

export default avatarRouter;
