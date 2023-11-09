import amountRepository from "../repositories/AmountRepository";

const saveAmount = (amountModel) => {
    return amountRepository.saveAmount(amountModel);
}

const getAmountById = (id) => {
    return amountRepository.getAmountById(id);
}

const getAllAmount = () => {
    return amountRepository.getAllAmount();
}

const deleteAmountById = (id) => {
    return amountRepository.deleteAmountById(id);
}

const updateAmountById = (id, amountModel) => {
    return amountRepository.updateAmountById(id, amountModel);
}

const service = {
    saveAmount,
    getAmountById,
    getAllAmount,
    deleteAmountById,
    updateAmountById
}

export default service;