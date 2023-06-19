import { prisma } from "@/config";

async function getAll() {
    return await prisma.chale.findMany();
}

async function getOne(chaletId: number) {
    return await prisma.chale.findFirst({
        where: {
            id: chaletId
        }
    });
}

async function reserveChalet(chaletId: number, userId: number) {
    return await prisma.reservations.create({
        data: {
            chaleId: chaletId,
            userId,
        }
    })
}

export const chaletRepository = {
    getAll,
    getOne,
    reserveChalet,
}