import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import connectDB from './config/db.js';
connectDB();

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
    console.log('API is running...');
    res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${port}`
    )
);
