import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
const router = express.Router()
router.get('/', 
    asyncHandler(async(req, res) => {
    const products = await Product.find({})
     res.json(products)
}))

router.get('/:id',asyncHandler(
    async(req, res) => {
        const products = await Product.findById(req.params.id)
        if(Product){
            res.json(products)
        }
        else{
           res.status(404)
           throw new Error("product not Found") 
        }
         
    }
) )

export default router
// import express from 'express'
// const router = express.Router()
// import {
//   getProducts,
//   getProductById,
//   deleteProduct,
//   createProduct,
//   updateProduct,
//   createProductReview,
//   getTopProducts,
// } from '../controllers/productController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'

// router.route('/').get(getProducts).post(protect, admin, createProduct)
// router.route('/:id/reviews').post(protect, createProductReview)
// router.get('/top', getTopProducts)
// router
//   .route('/:id')
//   .get(getProductById)
//   .delete(protect, admin, deleteProduct)
//   .put(protect, admin, updateProduct)

// export default router