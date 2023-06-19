import { NextFunction, Request, Response } from 'express';
import { SignInParams } from '@/protocols';
import httpStatus from 'http-status';
import { authenticationServices } from '@/services';

export async function signIn(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body as SignInParams;
  try {
    const response = await authenticationServices.signIn(email, password);
    return res.status(httpStatus.OK).send(response);

  } catch (error) {
    next(error);
  }
}
