import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import userRepository from '@/repositories/users-repository';
import { conflictError } from '@/errors';

export async function createUser({ email, password, cpf, nome }: CreateUserParams): Promise<User> {
  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.createUser({
    email,
    password: hashedPassword,
    cpf,
    nome
  });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw conflictError('E-mail already in use.');
  }
}

export type CreateUserParams = Pick<User, 'email' | 'password' | 'cpf' | 'nome'>;

const userService = {
  createUser,
};

export default userService;
