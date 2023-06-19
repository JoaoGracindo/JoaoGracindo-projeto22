import { Router } from "express";
import { createUser } from "@/controllers";
import { validateBody } from "@/middlewares";
import { signUpSchema } from "@/schemas";

const usersRouter = Router();

usersRouter.post('/', validateBody(signUpSchema), createUser);

export { usersRouter };