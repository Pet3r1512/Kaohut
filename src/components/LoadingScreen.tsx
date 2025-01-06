import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

export default function LoadingScreen({ className }: { className?: string }) {
  return (
    <div
      data-testid="LoadingScreen"
      className={cn(
        "w-full h-full flex items-center justify-center",
        className,
      )}
    >
      <LoaderCircle size={48} className="animate-spin text-primary" />
    </div>
  );
}
