import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import * as jwt from 'jsonwebtoken';

export async function authenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    
}