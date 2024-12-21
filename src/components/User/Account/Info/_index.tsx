import { Label } from "@/components/aceternity/Label";
import { Input } from "@/components/ui/input";

export default function AccountInfo() {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="w-full">
        <Label className="text-lg">Full Name</Label>
        <Input
          disabled
          value={"Peter Pham"}
          className="lgw-1/2 text-lg font-semibold"
        />
      </div>
      <div className="w-full">
        <Label className="text-lg">Email</Label>
        <Input
          disabled
          value={"peter1512.dev@gmail.com"}
          className="lg:w-1/2 text-lg font-semibold"
        />
      </div>
      <div className="lg:w-1/2 flex items-center gap-x-5">
        <div className="lg:w-1/2">
          <Label className="text-lg">Role</Label>
          <Input disabled value={"Teacher"} className="text-lg font-semibold" />
        </div>
        <div className="lg:w-1/2">
          <Label className="text-lg">Workplace</Label>
          <Input
            disabled
            value={"University"}
            className="text-lg font-semibold"
          />
        </div>
      </div>
    </div>
  );
}
