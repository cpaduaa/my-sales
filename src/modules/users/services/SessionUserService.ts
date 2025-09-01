import AppError from "@shared/errors/AppError";
import { User } from "../database/entities/User"
import { usersRepositories } from "../database/repositories/UserRepositories";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface ISessionUser {
  email: string;
  password: string;
}

interface ISessionRespponse {
  user: User;
  token: string;
}

export default class SessionUserService {
  async execute({ email, password }: ISessionUser): Promise<ISessionRespponse> {
    const user = await usersRepositories.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    if (!process.env.APP_SECRET) {
      throw new AppError('JWT secret is not defined', 500);
    }

    const token = sign(
      {},
      process.env.APP_SECRET,
      {
        subject: String(user.id),
        expiresIn: '1d'
      }
    );

    return {
      user,
      token
    }
  }
}
