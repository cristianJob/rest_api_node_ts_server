import express from "express";
import router from "./router";
import db from "./config/db";

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log('conexion exitosa')

    } catch (error) {
        console.log(error)
        console.log('hubo un error en la conexion')
    }
}

connectDB()

// intancia d eexpress
const server = express()

// lee datos de formulario de la peticion ej: postman
server.use(express.json())


server.use('/api/products', router)

export default server