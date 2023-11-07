import { DataTypes } from "sequelize";
import sequelize from "../utils/database.js";

const Biotope = sequelize.define('biotopes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, { underscored: true });

export default Biotope;