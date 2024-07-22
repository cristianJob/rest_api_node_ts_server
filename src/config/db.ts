import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'

dotenv.config()

const url = process.env.DATABASE_URL

const db = new Sequelize(url, {
    models: [__dirname + '/../models/**/*.ts']
})

export default db