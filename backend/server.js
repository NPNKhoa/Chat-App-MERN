import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';

import authRoutes from './routes/auth.routes.js';
import connectDB from './configs/dbConnection.js';

const app = express();
const port = process.env.PORT || 5000;
const apiVersion = process.env.API_VERSION || 'v1';

dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(express.json());
app.use(logger('dev'));
app.use(`/${apiVersion}/auth`, authRoutes);

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
})