import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const employeeSchema = new mongoose.Schema({
    employeeID: { 
        type: Number,
        required: true },
    firstName: {
        type: String,
        required: true 
        },
    lastName: {
        type: String,
        required: true 
        },
    email:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
});




export default mongoose.model('Employee', employeeSchema);

