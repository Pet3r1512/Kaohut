import { connectSocket } from "@/lib/socket-client";
import { useState } from "react";

export default function GameRoom() {
  const [hostName, setHostName] = useState("");
  const [gameCode, setGameCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCreateGame = () => {
    const socket = connectSocket(); // Connect to the socket server

    if (!hostName.trim()) {
      setError("Host name is required.");
      return;
    }

    setError(null); // Clear any previous error

    // Emit the "create_game" event to the server
    socket.emit(
      "create_game",
      { hostname: hostName },
      (response: { gameCode?: string; error?: string }) => {
        if (response.error) {
          setError(response.error);
          return;
        }

        setGameCode(response.gameCode || null); // Set the generated game code
      },
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <h1 className="text-xl font-bold">Create a Game Room</h1>
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Enter Host Name"
          value={hostName}
          onChange={(e) => setHostName(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
      <button
        onClick={handleCreateGame}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Create Game
      </button>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {gameCode && (
        <div className="mt-4">
          <p className="font-semibold">Game Created!</p>
          <p>
            Your Game Code: <span className="text-blue-600">{gameCode}</span>
          </p>
        </div>
      )}
    </div>
  );
}
