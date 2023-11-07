import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const Amount = sequelize.define('amounts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fish: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

});

export default Amount;