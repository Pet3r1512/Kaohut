/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useSocket } from "@/context/SocketContext";

interface Player {
  id: string;
  name: string;
  score: number;
}

const useSelectQuizAndCreateGame = (quizId: string, hostname: string) => {
  const [gameCode, setGameCode] = useState<string>("");
  const [players, setPlayers] = useState<Player[]>([]);
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.emit("select_quiz_and_create_game", { quizId, hostname }, (response: any) => {
      if (response.error) {
        console.error("Error creating game:", response.error);
        return;
      }
      setGameCode(response.gameCode);
    });

    const handlePlayerJoined = (updatedPlayers: Player[]) => {
      setPlayers(updatedPlayers);
    };

    socket.on("player_joined", handlePlayerJoined);

    return () => {
      socket.off("player_joined", handlePlayerJoined);
    };
  }, [socket, quizId, hostname]);

  useEffect(() => {
    console.log("Current players:", players);
  }, [players]);

  return { gameCode, players };
};

export default useSelectQuizAndCreateGame;