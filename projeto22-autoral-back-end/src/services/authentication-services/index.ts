import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { notFoundError } from '@/errors';
import userRepository from '@/repositories/users-repository';
import { invalidCredentialsError } from '@/errors/invalid-credentials-error';

async function signIn(email: string, password: string) {
  const user = await userRepository.findByEmail(email);
  if (!user) throw notFoundError();

  const isCorrectPassword = bcrypt.compare(password, user.password);
  if (!isCorrectPassword) throw invalidCredentialsError();

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  return token;
}

export const authenticationServices = {
  signIn,
};
