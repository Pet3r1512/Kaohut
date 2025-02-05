import FullLogo from "@/components/Layout/Logos/FullLogo";
import { User, Volume2, Settings as SettingIcon, Scan } from "lucide-react";
import { Player } from "./_index";

export default function Settings({ players }: { players: Player[] }) {
  const ICON_SIZE = 18;
  return (
    <div className="flex items-center justify-between w-full">
      <FullLogo />
      <div className="flex items-center gap-x-5 text-white">
        <div className="flex items-center gap-x-1.5 bg-black rounded-full px-2 py-1.5">
          <User size={ICON_SIZE} />
          <p className="font-semibold">{players.length}</p>
        </div>
        <div className="flex items-center gap-x-2.5 bg-black rounded-full px-2 py-1.5">
          <Volume2 size={ICON_SIZE} />
          <SettingIcon size={ICON_SIZE} />
          <Scan size={ICON_SIZE} />
        </div>
      </div>
    </div>
  );
}
