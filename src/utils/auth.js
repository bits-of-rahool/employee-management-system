import jwt from "jsonwebtoken"
import { User } from "../models/userModel.js";

const auth = async (req,res,next)=>{
    
    const token = req.cookies?.token;
    if(!token) return res.status(501).json("you are not logged in")

    try {
        const verified = jwt.verify(token,process.env.TOKEN_SECRET)

        const user = await User.findById(verified?._id).select("-password")
        
        if (!user) {
            res.status(500).json("invalid jwt token")
        }
        
            req.user = user;
    } catch (error) {
        return res.status(500).json({
            message:"error during jwt verification",
            error
        })
    }



    next();
}

export default auth;