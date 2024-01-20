import express from 'express';
import 'dotenv/config.js';
import mongoose from 'mongoose';

const app = express();

app.get('/', (req, res) => { res.send('running server!') });

app.listen(process.env.PORT||3000, () => {
    console.log(`Server is running on port ${process.env.PORT||3000}`);
});
