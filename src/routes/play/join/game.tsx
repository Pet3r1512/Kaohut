/* eslint-disable @typescript-eslint/no-explicit-any */
import FullLogo from "@/components/Layout/Logos/FullLogo";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { useSocket } from "@/context/SocketContext";
import { toast } from "@/hooks/useToast";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/play/join/game")({
  component: RouteComponent,
});

function RouteComponent() {
  const [joinGameCode, setJoinGameCode] = useState<string>("");
  const [playerName, setPlayerName] = useState<string>("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const socket = useSocket(); // Ensure the socket connection is established

  const router = useRouter();

  const joinGame = () => {
    const trimmedJoinGameCode = joinGameCode.trim();
    if (!trimmedJoinGameCode) {
      setError("Please enter a valid game code.");
      toast({
        variant: "destructive",
        title: error || "Invalid Game Code",
      });
      return;
    }

    setLoading(true);
    setError(null); // Clear any previous errors

    if (!socket) {
      return;
    }

    socket.emit(
      "join_game",
      {
        gameCode: trimmedJoinGameCode,
        playerName: playerName, // You can dynamically get this name if needed
      },
      (response: any) => {
        setLoading(false); // Stop loading indicator

        if (response.error) {
          setError(response.error); // Set error if response has error
          toast({
            variant: "destructive",
            title: error || "Invalid Game Code",
          });
          return;
        }
        // Handle successful response
        router.navigate({
          to: `/play/join/$quizId/guest`,
          params: { quizId: response.quizId },
          search: {
            gameCode: trimmedJoinGameCode,
            playerName: playerName,
          },
        });
      },
    );
  };

  return (
    <main className="bg-gradient-to-tr from-[#403A3E] via-[#D7DDE8] to-[#BE5869] h-[100dvh] flex flex-col items-center justify-center gap-y-10">
      <FullLogo imgClassName="!size-14" textClassName="lg:text-5xl" />
      <div className="w-60 flex flex-col gap-y-5">
        <Input
          type="number"
          maxLength={6}
          minLength={6}
          placeholder="Game Code"
          onChange={(e) => setJoinGameCode(e.target.value)}
          className="text-center !text-lg font-bold rounded-2xl shadow-2xl w-full"
        />
        <Input
          type="text"
          minLength={1}
          placeholder="Your Name"
          onChange={(e) => setPlayerName(e.target.value)}
          className="text-center !text-lg font-bold rounded-2xl shadow-2xl w-full"
        />
        <button
          onClick={joinGame}
          disabled={loading}
          className="bg-primary text-white font-bold text-lg w-full py-1.5 rounded-2xl shadow-2xl"
        >
          {loading ? "Joining..." : "Join Game"}
        </button>
      </div>
      <Toaster />
    </main>
  );
}
