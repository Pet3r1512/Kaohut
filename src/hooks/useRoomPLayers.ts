/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectSocket } from "@/lib/socket-client";
import { useEffect, useState } from "react";

export const useRoomPlayers = (gameCode: string, playerName?: string) => {
    const [players, setPlayers] = useState<{ id: string; name: string; score: number }[]>([]);
    const [socket, setSocket] = useState<any>(null);

    useEffect(() => {
        const socket = connectSocket()

        socket.on("connect", () => {
            console.log("[Socket.IO] Connected:", socket.id);
        });

        // Listen for players joining the room
        socket.on("player_joined", (updatedPlayers) => {
            setPlayers(updatedPlayers);
        });

        // If guest player wants to join
        if (gameCode && playerName) {
            socket.emit("join_game", { gameCode, playerName }, (response: any) => {
                if (response.success) {
                    console.log(`[Socket.IO] ${playerName} joined game: ${gameCode}`);
                } else {
                    console.error("[Socket.IO] Join Error:", response.error);
                }
            });
        }

        setSocket(socket);

        return () => {
            socket.disconnect();
        };
    }, [gameCode, playerName]);

    return { players, socket };
};
