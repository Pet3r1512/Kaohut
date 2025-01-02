import { LoaderCircle } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div
      data-testid="LoadingScreen"
      className="w-screen h-screen flex items-center justify-center"
    >
      <LoaderCircle size={48} className="animate-spin text-primary" />
    </div>
  );
}
