/* eslint-disable react-refresh/only-export-components */
import { SOCKET_URL } from "@/lib/socket-client";
import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

// Create a Context
const SocketContext = createContext<Socket | null>(null);

// Provider Component
export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

// Custom Hook
export const useSocket = () => {
  return useContext(SocketContext);
};
