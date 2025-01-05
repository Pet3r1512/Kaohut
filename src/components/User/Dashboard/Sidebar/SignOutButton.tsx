import { useSidebar } from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { useRouter } from "@tanstack/react-router";
import { CirclePower, LoaderCircle } from "lucide-react";
import { useState } from "react";
import Cookies from "universal-cookie";

export default function SignOutButton() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { open } = useSidebar();
  const cookies = new Cookies(null, { path: "/" });

  return (
    <button
      onClick={async () => {
        setLoading(true);
        cookies.remove("token");
        cookies.remove("userEmail");
        await authClient.signOut();
        setLoading(false);
        router.navigate({ to: "/auth/accounts/signin" });
      }}
      className={cn(
        "bg-red-500/80 lg:hover:bg-red-500 transition-all duration-150 ease-linear text-white w-full rounded-2xl py-2.5 lg:font-semibold",
        !open
          ? "rounded-full size-fit p-2 transition-all duration-150 ease-linear"
          : "",
      )}
    >
      {loading ? (
        <LoaderCircle size={18} className="animate-spin mx-auto" />
      ) : (
        <p>{open ? "Sign Out" : <CirclePower size={18} />}</p>
      )}
    </button>
  );
}
