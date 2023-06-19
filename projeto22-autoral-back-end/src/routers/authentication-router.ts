import { Router } from "express";
import { validateBody } from "@/middlewares";
import { signInSchema } from "@/schemas";
import { signIn } from "@/controllers/authentication-controller";

const authenticationRouter = Router();

authenticationRouter.post('/', validateBody(signInSchema), signIn);

export { authenticationRouter };