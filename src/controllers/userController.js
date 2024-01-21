import {User} from "../models/userModel.js"
import {userValidationSchema} from "../middleware/validationMiddleware.js";

const refreshToken= async (user)=>{
    const token = await user.generateToken();
    return token;
}

const loginUser = async (req,res)=>{
    const {email,password}=req.body;
    try {
        const user = await User.findOne({email}); 
        // console.log(user)
        if(!user){
            return res.status(400).json({message:"user does not exist"})
        }
        
        const isCorrect = await user.isPasswordCorrect(password);
        console.log("chala")
        if(!isCorrect) return res.status(400).json({message:"Incorrect Password"})

        const token = await refreshToken(user);

        const options = {
            httpOnly: true,
            secure: true
        }

        return res.status(200)
        .cookie("token",token,options)
        .json({
            message:"user logged in",
            token,
        })

    } catch (error) {
        console.log("error while Logging in: "+ error)
        
    }
} 

const registerUser = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const data = {
            email,
            password
        }
        // const validatedData = await userValidationSchema.validateAsync(data)

    
        const createdUser = await User.create(data);
    
        return res.status(200).json({createdUser})
    } catch (error) {
        console.log("error while creating user: "+ error)
    }
}

const logoutUser = async(req,res)=>{
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("token", options)
    .json("user logged out")
}

export {
    loginUser,
    registerUser,
    logoutUser
}