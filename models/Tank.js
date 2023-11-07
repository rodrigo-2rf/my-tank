import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const Tank = sequelize.define('tanks', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    litros: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Tank;