import ThemeToggle from "@/components/ThemeToggle";
import { LanguagesToggle } from "./LanguagesToggle";

export default function Settings() {
  return (
    <div className="flex items-center gap-x-5">
      <ThemeToggle />
      <LanguagesToggle />
    </div>
  );
}
