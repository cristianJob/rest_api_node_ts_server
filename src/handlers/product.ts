import { Request, Response } from "express"
import Product from "../models/Product.model"

export const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await Product.findByPk(req.params.id)
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' })
        }
        res.json({ data: product })
    } catch (error) {
        console.log(error)
    }
}

export const getProducts = async (req: Request, res: Response) => {
    try {
        const product = await Product.findAll()
        res.json({ data: product })
    } catch (error) {
        console.log(error)
    }
}

export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.create(req.body)
        res.json({ data: product })
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.findByPk(req.params.id)
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' })
        }

        await product.update(req.body)
        res.json({ data: product })
    } catch (error) {
        console.log(error)
    }
}

export const updateAvailability = async (req: Request, res: Response) => {
    try {
        const product = await Product.findByPk(req.params.id)
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' })
        }

        await product.update(req.body)
        res.json({ data: product })
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.findByPk(req.params.id)
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' })
        }

        await product.destroy()
        res.json({ data: product })
    } catch (error) {
        console.log(error)
    }
}