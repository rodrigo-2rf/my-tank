import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const Fish = sequelize.define('fishs', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    family: {
        type: DataTypes.STRING,
        allowNull: false
    },
    specie: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});

export default Fish;