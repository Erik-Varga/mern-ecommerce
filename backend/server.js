import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// APP CONFIG

// creates instance of express server
const app = express()

// defines the port number and environmental variable
const port = process.env.PORT || 4000

// connects DB from the mongodb file
connectDB()

// connects cloudinary
connectCloudinary()

// MIDDLEWARE
// requests are passed as json
app.use(express.json())

// accesses backend from any ip
app.use(cors())

// API ENDPOINTS
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.use('/', (req,res)=>{
    res.send("API Working")
})

// STARTS THE EXPRESS SERVER
app.listen(port, ()=> console.log('Server started on PORT : ' + port))