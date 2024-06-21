import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';

import authRoutes from './routes/auth.routes.js';
import messageRotues from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectDB from './configs/dbConnection.js';
import cookieParser from 'cookie-parser';
import { app, server, } from './socket/socket.js';

const port = process.env.PORT || 5000;
const apiVersion = process.env.API_VERSION || 'v1';

dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(express.json());
app.use(cookieParser());
app.use(logger('dev'));

app.use(`/${apiVersion}/auth`, authRoutes);
app.use(`/${apiVersion}/messages`, messageRotues);
app.use(`/${apiVersion}/users`, userRoutes);

server.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
})