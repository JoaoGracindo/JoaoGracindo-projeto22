import { getAllChalet, getChaletAvailability, reserveChalet } from "@/controllers";
import { authenticationMiddleware } from "@/middlewares";
import { Router } from "express";

const chaletRouter = Router();

chaletRouter.get('/', getAllChalet);
chaletRouter.get('/:id', getChaletAvailability);
chaletRouter.post('/:id', authenticationMiddleware, reserveChalet);

export { chaletRouter };