/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSocket } from "@/context/SocketContext";
import { connectSocket } from "@/lib/socket-client";
import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/play/join/game")({
  component: RouteComponent,
});

function RouteComponent() {
  const [joinGameCode, setJoinGameCode] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const socket = useSocket() || connectSocket(); // Ensure the socket connection is established

  useEffect(() => {
    // Connect to the socket when the component mounts
    connectSocket(); // Ensure socket is initialized

    return () => {
      // Optionally handle disconnection logic here if needed
    };
  }, []);

  const joinGame = () => {
    const trimmedJoinGameCode = joinGameCode.trim();
    if (!trimmedJoinGameCode) {
      setError("Please enter a valid game code.");
      return;
    }

    setLoading(true);
    setError(null); // Clear any previous errors

    socket.emit(
      "join_game",
      {
        gameCode: trimmedJoinGameCode,
        playerName: "Thanh Phong", // You can dynamically get this name if needed
      },
      (response: any) => {
        setLoading(false); // Stop loading indicator

        if (response.error) {
          setError(response.error); // Set error if response has error
          return;
        }

        // Handle successful response
        console.trace(response);
      },
    );
  };

  return (
    <div>
      <input
        value={joinGameCode}
        onChange={(e) => setJoinGameCode(e.target.value)}
        type="text"
        placeholder="Enter game code"
      />
      <button onClick={joinGame} disabled={loading}>
        {loading ? "Joining..." : "Join Game"}
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
