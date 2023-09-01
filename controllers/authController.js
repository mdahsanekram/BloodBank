const userModel = require('../models/userModal')
const bcrypt = require("bcryptjs")
var jwt = require('jsonwebtoken');

const registerController = async (req, res) => {

    try {
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'User Already Exist'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashPassword;

        const user = new userModel(req.body);
        await user.save();
        return res.status(201).send({
            success: true,
            message: "User Create Sucessfully"
        })

    } catch (errors) {
        console.log(errors)
        res.status(500).send({
            message: "Erorrs in Register API",
            success: false,
            errors
        });


    }
};

// login call Back
const loginController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (!existingUser) {
            return res.status(404).send({
                success: false,
                message: "Invalid Credentials"
            })
        }
        
        if(existingUser.role!==req.body.role){
            return res.status(500).send({
                success:false,
                message:"role doesn't match"
            })
        }
        // compair password
        // const compairPassword= await 
        const compairPassword = await bcrypt.compare(req.body.password, existingUser.password)
        if (!compairPassword) {
            return res.status(500).send({
                success: false,
                message: "Invalid Credentials"
            })

        }
        const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRATE, {
            expiresIn: "1d",
        });
        return res.status(200).send({
            success: true,
            message: "Login Successfully",
            existingUser,
            token
        })

    } catch (errors) {
        // console.log(errors)
        res.status(500).send({
            message: "Erorrs in Login API",
            success: false,
            errors
        });
    }
}

const currentUserController = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId })
        return res.status(200).send({
            success: true,
            message: "User Fetch Successfully.",
            user
        })

    } catch (errors) {
        console.log(errors)
        return res.status(500).send({
            success: false,
            message: "Enable to get current user",
            errors
        })
    }

}

module.exports = { registerController, loginController, currentUserController };