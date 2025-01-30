import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";

export default function CategoryBadge({ category }: { category: string }) {
  return (
    <Badge>
      <Filter size={16} />
      <span>{category}</span>
    </Badge>
  );
}
