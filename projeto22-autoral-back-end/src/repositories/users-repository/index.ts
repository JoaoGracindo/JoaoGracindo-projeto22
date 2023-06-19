import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function findUserById(userId: number) {
    return await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}

async function findByEmail(email: string) {
    return await prisma.user.findFirst({
        where: {
            email
        }
    })
}

async function createUser(data: Prisma.UserUncheckedCreateInput) {
    return await prisma.user.create({
        data
    })
}

const userRepository = {
    findUserById,
    findByEmail,
    createUser,
};

export default userRepository;