import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
<<<<<<< HEAD
=======
  getTopProducts,
>>>>>>> 35ebf2384241c0d07b3ba1fe77fee5753036fc54
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
<<<<<<< HEAD
=======
router.get('/top', getTopProducts)
>>>>>>> 35ebf2384241c0d07b3ba1fe77fee5753036fc54
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default router