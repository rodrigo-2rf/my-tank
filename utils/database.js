import { Sequelize, sequelize } from "sequelize";

const sequelize = new Sequelize(
    'my-tank-databse',
    'postgres',
    'postgres', {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        define: {
            timestamp: false
        }
    }
);

export default sequelize;