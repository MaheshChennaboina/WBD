import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  updateOrderToPaid,
<<<<<<< HEAD
  getOrderById,
  getMyOrders,
  updateOrderToDelivered
} from '../controllers/orderController.js'
import { protect ,admin} from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems)
=======
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
>>>>>>> 35ebf2384241c0d07b3ba1fe77fee5753036fc54
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router