import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import * as jwt from 'jsonwebtoken';

export async function authenticationMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authorization = req.header('Authorization');
    if(!authorization) return res.sendStatus(httpStatus.UNAUTHORIZED);

    const token = authorization.split(' ')[1];
    if(!token) return res.sendStatus(httpStatus.UNAUTHORIZED);

    try {
        const { userId } = jwt.verify(token, process.env.JWT_SECRET) as authorizationPayload;
        req.userId = userId;
        
        return next()
    } catch (err) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }


}

type authorizationPayload = {
    userId: number
}

export type AuthenticatedRequest = Request & authorizationPayload;