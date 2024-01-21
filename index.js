import express from 'express';
import auth from './src/utils/auth.js';
import 'dotenv/config.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

try {
    mongoose.connect(process.env.MONGO_URI);  
} catch (error) {
    console.log("error while connecting to db")
}

import employeeRoutes from './src/routes/employeeRoutes.js';
import userRoutes from "./src/routes/userRoutes.js"

app.use('/api/employees',auth, employeeRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT||3000, () => {
    console.log(`Server is running on port ${PORT||3000}`);
});
