import express from 'express';
import 'dotenv/config.js';
import mongoose from 'mongoose';
import employeeRoutes from './src/routes/employeeRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
    mongoose.connect(process.env.MONGO_URI);  
} catch (error) {
    console.log("error while connecting to db")
}

app.use('/api/', employeeRoutes);

app.listen(PORT||3000, () => {
    console.log(`Server is running on port ${PORT||3000}`);
});
