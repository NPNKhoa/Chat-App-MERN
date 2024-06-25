import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import messageRotues from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectDB from './configs/dbConnection.js';
import cookieParser from 'cookie-parser';
import { app, server, } from './socket/socket.js';

const port = process.env.PORT || 5000;
const apiVersion = process.env.API_VERSION || 'v1';
const allowOrigin = ['http://localhost:3000'];
const corsOptions = {
  origin: function(origin, callback) {
    if (allowOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    }
    else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccesStatus: 200
}

dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(cors(corsOptions));
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