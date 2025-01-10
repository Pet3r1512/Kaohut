import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-x-1.5 h-12">
      <Input
        placeholder="Search public content"
        className="w-10/12 md:w-80 lg:w-96 h-full text-xl"
      />
      <button className="bg-secondary text-white h-full w-2/12 md:size-12 lg:size-12 flex items-center justify-center rounded-lg">
        <Search size={18} />
      </button>
    </div>
  );
}
