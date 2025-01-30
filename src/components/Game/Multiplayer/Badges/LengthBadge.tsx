import { Badge } from "@/components/ui/badge";
import { Flag } from "lucide-react";

export default function LengthBadge({ length }: { length: number }) {
  return (
    <Badge className="bg-white text-black">
      <Flag size={16} />
      <span>{length} questions</span>
    </Badge>
  );
}
