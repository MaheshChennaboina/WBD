import express from 'express'
// import { getProductById } from '../controllers/productController.js'
const router = express.Router()
import {authUser} from '../controllers/userController.js'

router.post('/login', authUser)



export default router

