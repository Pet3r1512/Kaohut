import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const SOCKET_URL = import.meta.env.MODE === "development" ? "ws://localhost:9999" : "https://blonde-michell-pet3r-22028f0a.koyeb.app/"

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
    if (!socket) {
        throw new Error("Socket connection has not been established. Call connectSocket first.");
    }
    return socket;
};
