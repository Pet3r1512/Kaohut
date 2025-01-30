import { Badge } from "@/components/ui/badge";
import { Timer } from "lucide-react";

export default function TimeBadge({ time }: { time: number }) {
  return (
    <Badge className="bg-white text-black">
      <Timer size={16} />
      <span>{time}s</span>
    </Badge>
  );
}
