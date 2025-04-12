import express from 'express'
import { placeOrderCod, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus } from '../controllers/orderController.js'
import authUser from '../middleware/auth.js';
import adminAuth from '../middleware/adminAuth.js';

// creates router
const orderRouter = express.Router()

// api routes from controller

// admin
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// payment
orderRouter.post('/place', authUser, placeOrderCod)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)

// user
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter