import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// Database configration functionality...
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017";
const connectDB = async () => {
   try {
    await mongoose.connect (DB_URI);
    console.log('Database connected Successfully')
   } catch (error) {
        console.log(error)
   }
};

export default connectDB;