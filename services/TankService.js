import tankRepository from "../repositories/TankRepository";

const saveTank = (tankModel) => {
    return tankRepository.saveTank(tankModel);
}

const getTankById = (id) => {
    return tankRepository.getTankById(id);
}

const getAllTank = () => {
    return tankRepository.getAllTank();
}

const deleteTankById = (id) => {
    return tankRepository.deleteTankById(id);
}

const updateTankById = (id, tankModel) => {
    return tankRepository.updateTankById(id, tankModel);
}

const service = {
    saveTank,
    getTankById,
    getAllTank,
    deleteTankById,
    updateTankById
}

export default service;