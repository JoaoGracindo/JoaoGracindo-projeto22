import { AuthenticatedRequest } from "@/middlewares";
import { NextFunction, Request, Response } from "express";
import chaletServices from "@/repositories/chalet-repository";
import httpStatus from "http-status";
import { notFoundError } from "@/errors";

export async function getAllChalet(req: Request, res: Response, next: NextFunction) {
    try {
        const response = await chaletServices.getAll();
        return res.status(httpStatus.OK).send(response);

    } catch (error) {
        next(error);
    }
}

export async function getChaletAvailability(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const chaletId = Number(id);
    if(isNaN(chaletId)) next(notFoundError());
    
    try {
        const response = await chaletServices.getOne(chaletId);
        return res.status(httpStatus.OK).send(response);
    } catch (error) {
        next(error);
    }
}

export async function reserveChalet(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { id: chaletId} = req.params;
    const { userId } = req;
    try {
        
    } catch (error) {
        next(error);
    }
}