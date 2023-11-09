import biotopeRepository from "../repositories/BiotopeRepository";

const saveBiotope = (biotopeModel) => {
    return biotopeRepository.saveBiotope(biotopeModel);
}

const getBiotopeById = (id) => {
    return biotopeRepository.getBiotopeById(id);
}

const getAllBiotope = () => {
    return biotopeRepository.getAllBiotope();
}

const deleteBiotopeById = (id) => {
    return biotopeRepository.deleteBiotopeById(id);
}

const updateBiotopeById = (id, biotopeModel) => {
    return biotopeRepository.updateBiotopeById(id, biotopeModel);
}

const service = {
    saveBiotope,
    getBiotopeById,
    getAllBiotope,
    deleteBiotopeById,
    updateBiotopeById
}

export default service;