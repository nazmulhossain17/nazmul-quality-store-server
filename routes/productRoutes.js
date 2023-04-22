import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductContainer, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductContainer } from "../controllers/productController.js";
import ExpressFormidable from "express-formidable";


const router = express.Router()

router.post('/create-product', requireSignIn, isAdmin, ExpressFormidable(), createProductContainer)

router.get('/get-product', getProductController)

router.get('/get-product/:slug', getSingleProductController)

router.get('/product-photo/:pid', productPhotoController)

router.delete('/product/:pid', deleteProductController)

router.post('/update-product/:pid', requireSignIn, isAdmin, ExpressFormidable(), updateProductContainer)



export default router;