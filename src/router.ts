import { Router } from "express"
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailability, updateProduct } from "./handlers/product"
import { body, param } from "express-validator"
import { handleInputErrors } from "./middleware"

const router = Router()

//GET
router.get('/', getProducts)

//GET BY ID
router.get('/:id',
    param('id')
    .isNumeric().withMessage('El valor debe ser numerico'),
    handleInputErrors,
    getProductById)

//POST
router.post('/',

    body('name')
    .notEmpty().withMessage('el nombre del producto no puede ir vacio'),
    body('price')
    .isNumeric().withMessage('valor no valido')
    .notEmpty().withMessage('el precio del producto no puede ir vacio')
    .custom(value => value > 0).withMessage('el valor debe ser mayor a 0 '),
    handleInputErrors,
     createProduct)

//PUT reemplaza todo con lo que le mandes
router.put('/:id',

    body('name')
    .notEmpty().withMessage('el nombre del producto no puede ir vacio'),
    body('price')
    .isNumeric().withMessage('valor no valido')
    .notEmpty().withMessage('el precio del producto no puede ir vacio')
    .custom(value => value > 0).withMessage('el valor debe ser mayor a 0 '),
    body('availability')
    .isBoolean().withMessage('El valor debe ser booliano'),
    handleInputErrors,
     updateProduct)

//PATCH reemplaza solo lo que le estas enviando aunque la funcion update se encarga de eso
router.patch('/:id',
    body('availability')
    .isBoolean().withMessage('El valor debe ser booliano'),
    param('id')
    .isNumeric().withMessage('El valor debe ser numerico'),
    handleInputErrors,
     updateAvailability)


//PATCH reemplaza solo lo que le estas enviando aunque la funcion update se encarga de eso
router.delete('/:id',
    param('id')
    .isNumeric().withMessage('El valor debe ser numerico'),
    handleInputErrors,
    deleteProduct)


export default router