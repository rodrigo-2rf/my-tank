import fishRepository from "../repositories/FishRepository";

const saveFish = (fishModel) => {
    return fishRepository.saveFish(fishModel);
}

const getFishById = (id) => {
    return fishRepository.getFishById(id);
}

const getAllFish = () => {
    return fishRepository.getAllFish();
}

const deleteFishById = (id) => {
    return fishRepository.deleteFishById(id);
}

const updateFishById = (id, fishModel) => {
    return fishRepository.updateFishById(id, fishModel);
}

const service = {
    saveFish,
    getFishById,
    getAllFish,
    deleteFishById,
    updateFishById
}

export default service;