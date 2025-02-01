/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Lobby from "@/components/Game/Lobby/_index";
import { SOCKET_URL } from "@/lib/socket-client";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io(SOCKET_URL);

type MultiplayerRoomSearchParams = {
  hostname: string;
};

export const Route = createFileRoute("/play/multi/$quizId/waiting")({
  component: RouteComponent,
  validateSearch: (search): MultiplayerRoomSearchParams => {
    return {
      hostname: String(search.hostname),
    };
  },
});

function RouteComponent() {
  const [gameCode, setGameCode] = useState<string>("");
  const { quizId } = Route.useParams();
  const { hostname } = Route.useSearch();

  useEffect(() => {
    socket.emit(
      "select_quiz_and_create_game",
      { quizId, hostname },

      (response: any) => {
        if (response.error) {
          console.error("Error start multiplayer mode:", response.error);
          return;
        }

        if (gameCode === "") {
          setGameCode(response.gameCode);
        }
      },
    );
  }, []);

  return <Lobby gameCode={gameCode} />;
}
