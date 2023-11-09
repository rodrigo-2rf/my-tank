import Fish from "../models/Fish.js";

const saveFish = async(FishModel) => {
    const save = await Fish.create(FishModel);
    return save;
}

const getAllFishes = async() => {
    return await Fish.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

const getFishById = async(id) => {
    return await Fish.findByPk(id);
};

const deleteFishById = async(id, FishModel) => {
    try {
        const result = await Fish.update(FishModel, { where: { id: id } });
        if (result[0] === 1) {
            return { message: "OK" };
        } else {
            return { message: "not find", status: 400 };
        }
    } catch (error) {
        console.log(error)
    }
};

const factory = {
    saveFish,
    getAllFishes,
    getFishById,
    deleteFishById
}

export default factory;