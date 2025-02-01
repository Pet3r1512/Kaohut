import { Clipboard } from "lucide-react";

export default function Pin({ pin }: { pin: string }) {
  return (
    <div
      data-testid="pin"
      className="flex flex-col gap-y-2.5 mx-auto bg-white shadow-2xl rounded-2xl px-5 py-2.5"
    >
      <p className="text-lg font-bold text-black">Game PIN:</p>
      <div className="flex items-end gap-x-8">
        <p className="text-6xl w-60 h-18 font-extrabold tracking-widest text-primary">
          {pin}
        </p>
        <Clipboard className="text-black" />
      </div>
    </div>
  );
}
