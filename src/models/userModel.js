import {Schema,model} from "mongoose";
import bcrypt from "bcryptjs"
import  jwt  from "jsonwebtoken";


const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
}); 

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email:this.email
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn: process.env.TOKEN_EXPIRY
        }
    )
}

export const User = new model("User",userSchema);
