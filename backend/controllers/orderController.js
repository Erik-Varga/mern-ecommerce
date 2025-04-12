import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// place order using COD method
const placeOrderCod = async (req, res) => {
    try {
        // gets userId items amount address from the request body
        const { userId, items, amount, address } = req.body;

        // creates new orderData object
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        // creates a new order
        const newOrder = new orderModel(orderData)

        // saves to mongodb
        await newOrder.save()

        // clear cartData
        await userModel.findByIdAndUpdate(userId, {cartData:{}})

        res.json({ success: true, message: "Order Placed" })

    } catch (error) {
        console.log(error)
        res.json({ success:false, message:error.message })
    }
}

// place order using Stripe method
const placeOrderStripe = async (req, res) => {

}

// place order using Razorpay method
const placeOrderRazorpay = async (req, res) => {

}

// All Orders data for Admin Panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// User Orders data for Frontend
const userOrders = async (req, res) => {
    try {
        // gets userId from the request body
        const { userId } = req.body;

        const orders = await orderModel.find({ userId })

        res.json({ success: true, orders })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Update Order Status from Admin Panel
const updateStatus = async (req, res) => {
    try {
        // gets userId from the request body
        const { orderId, status } = req.body;

        await orderModel.findByIdAndUpdate(orderId, { status })

        res.json({ success: true, message: 'Status Updated' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { placeOrderCod, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }
