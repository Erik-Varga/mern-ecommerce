import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

// creates jwt token
const createToken = (id) => {
    return jwt.sign({ id },process.env.JWT_SECRET)
}

// routes to login user
const loginUser = async (req, res) => {
    try {
        // gets name email password from the request body
        const {email,password} = req.body;

        // checks if user already exists
        const user = await userModel.findOne({email})
        if (!user) {
            return res.json({success:false,message:"User doesn't exist"})
        }

        // checks for password match
        const isMatch = await bcrypt.compare(password,user.password)

        if (isMatch) {
            // generates user token
            const token = createToken(user._id)

            // sets token as a response
            res.json({success:true,token})
        } else {
            res.json({success:false,message:'Invalid credentials'})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// routes to register user
const registerUser = async (req, res) => {
    try {
        // gets name email password from request body
        const {name,email,password} = req.body;

        // checks if user already exists
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success:false,message:"User already exists"})
        }

        // validates email format
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter a valid email"})
        }

        // validates password length
        if (password.length < 8) {
            return res.json({success:false,message:"Please enter a strong password"})
        }

        // hashes user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        // creates user object
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        // saves user into db
        const user = await newUser.save()

        // generates user token
        const token = createToken(user._id)

        // sets token as a response
        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// route to admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        // checks admin email
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            // creates token
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            // response json
            res.json({success:true,token})
        } else {
            console.log(error)
            res.json({success:false,message:"Invalid credentials"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export { loginUser, registerUser, adminLogin } 