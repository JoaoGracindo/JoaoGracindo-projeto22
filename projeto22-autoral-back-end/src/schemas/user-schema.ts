import { User } from "@prisma/client";
import Joi from "joi";

export const signInSchema = Joi.object<Pick<User, 'email' | 'password'>>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})

export const signUpSchema = Joi.object<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    nome: Joi.string().required(), 
    cpf: Joi.string().min(11).max(11).required(), 
})