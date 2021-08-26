import mongoose from 'mongoose';
import config from '../utils/config';

mongoose
  .connect(config.MONGO_DB_URI, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error: Error) => {
    throw new Error(error.message);
  });
