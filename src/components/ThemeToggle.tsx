import { useTheme } from "../hooks/useTheme";
import { cn } from "../lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      data-testid="theme-togger"
      onClick={toggleTheme}
      className={cn(
        "!size-8 !lg:size-10 p-3 w-auto rounded-full lg:text-lg transition-all dark:text-black text-white duration-150 ease-linear flex items-center justify-center",
        className,
        theme === "light" ? "bg-gray-500" : "bg-gray-200",
      )}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
