/* eslint-disable react-hooks/exhaustive-deps */
import { getUserByEmail } from "@/api/user/getUser";
import { Label } from "@/components/aceternity/Label";
import LoadingScreen from "@/components/LoadingScreen";
import { Input } from "@/components/ui/input";
import { defaultUser, useUserStore } from "@/stores/user";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import Cookies from "universal-cookie";

export default function AccountInfo() {
  const { getUser, setUser } = useUserStore();
  const currUser = getUser();

  const mutation = useMutation({
    mutationFn: getUserByEmail,
    mutationKey: ["user"],
    onSuccess: (data) => {
      const user = data.user.user;
      setUser({
        name: user.name,
        email: user.email,
        role: user.role,
        workplace: user.workplace,
      });
    },
    onError: (error) => {
      console.error("Error fetching user:", error.message);
    },
  });

  useEffect(() => {
    if (currUser.email === defaultUser.email) {
      const cookies = new Cookies();
      const userEmail = cookies.get("userEmail");
      if (userEmail) {
        mutation.mutate(userEmail);
      } else {
        console.warn("No userEmail cookie found.");
      }
    }
  }, [currUser.email]);

  if (mutation.isPending) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col gap-y-5">
      <div className="w-full">
        <Label className="text-lg">Full Name</Label>
        <Input
          disabled
          value={currUser?.name || ""}
          className="lg:w-1/2 text-lg font-semibold"
        />
      </div>
      <div className="w-full">
        <Label className="text-lg">Email</Label>
        <Input
          disabled
          value={currUser?.email || ""}
          className="lg:w-1/2 text-lg font-semibold"
        />
      </div>
      <div className="lg:w-1/2 flex items-center gap-x-5">
        <div className="lg:w-1/2">
          <Label className="text-lg">Role</Label>
          <Input
            disabled
            value={currUser?.role || ""}
            className="text-lg font-semibold"
          />
        </div>
        <div className="lg:w-1/2">
          <Label className="text-lg">Workplace</Label>
          <Input
            disabled
            value={currUser?.workplace || ""}
            className="text-lg font-semibold"
          />
        </div>
      </div>
    </div>
  );
}
