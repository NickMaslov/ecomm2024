import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
import connectDB from './config/db.js';
connectDB();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js';

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    console.log('API is running...');
    res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${port}`
    )
);
