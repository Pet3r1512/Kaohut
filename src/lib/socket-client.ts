import { io, Socket } from "socket.io-client";

// Declare socket globally, but do not initialize it until connectSocket is called.
let socket: Socket | null = null;

export const SOCKET_URL = import.meta.env.MODE === "development"
    ? "ws://localhost:9999"
    : "wss://blonde-michell-pet3r-22028f0a.koyeb.app";

export const connectSocket = () => {
    if (!socket) {
        socket = io(SOCKET_URL);
    }
    return socket;
};

export const disconnectSocket = () => {
    if (socket) {
        socket.disconnect();
        socket = null;
    }
};

export const getSocket = () => {
    return socket;
};