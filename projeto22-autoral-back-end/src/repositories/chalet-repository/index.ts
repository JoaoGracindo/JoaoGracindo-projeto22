import { notFoundError } from "@/errors";
import { chaletRepository } from "@/services";

export async function getAll() {
    return await chaletRepository.getAll();
}

export async function getOne(chaletId: number) {
    const chalet = await chaletRepository.getOne(chaletId);
    if(!chalet) throw notFoundError();

    return chalet;
}

export async function reserveChalet(chaletId: number, userId: number) {
    
}

const chaletServices = {
    getAll,
    getOne,
    reserveChalet,
}

export default chaletServices;