function extractPlayerInitials(name: string): string {
  const words = name.trim().split(/\s+/); // Split by spaces and remove extra spaces

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase(); // Take first 2 letters of the single word
  }

  return (words[0][0] + words[1][0]).toUpperCase(); // Take first letter of first two words
}

export default function PlayerCard({ playerName }: { playerName: string }) {
  return (
    <div className="bg-white w-fit flex items-center gap-x-3 rounded-2xl px-5 py-3">
      <div className="rounded-full size-14 text-2xl flex items-center justify-center bg-primary text-white font-bold">
        {extractPlayerInitials(playerName)}
      </div>
      <p className="text-3xl font-semibold">{playerName}</p>
    </div>
  );
}
