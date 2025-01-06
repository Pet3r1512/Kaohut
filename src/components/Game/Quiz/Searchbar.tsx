import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-x-1.5 h-12">
      <Input
        placeholder="Search public content"
        className="w-96 h-full text-xl"
      />
      <button className="bg-secondary text-white !size-12 flex items-center justify-center rounded-lg">
        <Search size={18} />
      </button>
    </div>
  );
}
