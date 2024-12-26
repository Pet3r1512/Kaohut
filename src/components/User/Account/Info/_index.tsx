import { Label } from "@/components/aceternity/Label";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/stores/user";

export default function AccountInfo() {
  const { getUser } = useUserStore();
  const currUser = getUser();

  return (
    <div className="flex flex-col gap-y-5">
      <div className="w-full">
        <Label className="text-lg">Full Name</Label>
        <Input
          disabled
          value={currUser.name}
          className="lg:w-1/2 text-lg font-semibold"
        />
      </div>
      <div className="w-full">
        <Label className="text-lg">Email</Label>
        <Input
          disabled
          value={currUser.email}
          className="lg:w-1/2 text-lg font-semibold"
        />
      </div>
      <div className="lg:w-1/2 flex items-center gap-x-5">
        <div className="lg:w-1/2">
          <Label className="text-lg">Role</Label>
          <Input
            disabled
            value={currUser.role}
            className="text-lg font-semibold"
          />
        </div>
        <div className="lg:w-1/2">
          <Label className="text-lg">Workplace</Label>
          <Input
            disabled
            value={currUser.workplace}
            className="text-lg font-semibold"
          />
        </div>
      </div>
    </div>
  );
}
