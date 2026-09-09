import { setDefaultResultOrder } from 'node:dns';
import mongoose from 'mongoose';

setDefaultResultOrder('ipv4first');

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error.message);
    process.exit(1);
  }
};
