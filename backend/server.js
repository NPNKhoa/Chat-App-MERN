import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectDB from './configs/dbConnection.js';
import cookieParser from 'cookie-parser';
import { app, server, } from './socket/socket.js';

const port = process.env.PORT || 5000;
const __dirname = path.resolve();
const apiVersion = process.env.API_VERSION || 'v1';
const allowOrigin = [
  'http://localhost:3000',
  'http://localhost:5000',
  'https://chat-app-mern-wnvj.onrender.com',
  '*',
];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

dotenv.config();

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(logger('dev'));

app.use(`/${apiVersion}/auth`, authRoutes);
app.use(`/${apiVersion}/messages`, messageRoutes);
app.use(`/${apiVersion}/users`, userRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
})

server.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
})