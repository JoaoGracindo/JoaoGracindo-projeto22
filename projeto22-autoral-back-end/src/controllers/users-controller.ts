import userService from "@/services/user-services";
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

export async function createUser(req: Request, res: Response, next: NextFunction) {
    const { email, password, cpf, nome } = req.body;

    try {
      const user = await userService.createUser({ email, password, cpf, nome });
      return res.status(httpStatus.CREATED).json({
        id: user.id,
        email: user.email,
      });
    } catch (error) {
      next(error)
    }
}