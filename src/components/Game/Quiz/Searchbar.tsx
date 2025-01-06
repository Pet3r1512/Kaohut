import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-x-1.5 h-12">
      <Input
        placeholder="Search public content"
        className="!outline-none !border-none w-96 h-full"
      />
      <button className="bg-secondary text-white !size-12 flex items-center justify-center rounded-lg">
        <Search size={18} />
      </button>
    </div>
  );
}
