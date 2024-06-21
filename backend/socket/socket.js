import { Server } from "socket.io";
import express from 'express';
import http from 'http';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('user connected', socket.id);


    socket.on('dissconnect', () => {
        console.log('user disconnected', socket.id);
    });
});

export { app, server, io, };