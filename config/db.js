import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config()

const dbUri = process.env.PG_DB

const db = new Sequelize(dbUri, {
    dialect: 'postgres',
});

export default db;