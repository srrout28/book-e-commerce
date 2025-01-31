import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import bookRouter from './routes/bookRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

import 'dotenv/config';  //--dotenv

//--app config
const app = express();
const PORT = process.env.PORT || 4892;

//--middleware
app.use(express.json());  
app.use(cors());

//--DataBase connection--
connectDB();

//--api endpoints--
app.use('/api/book', bookRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
    res.send('Book Store for Skill Academy!')
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`) 
});
