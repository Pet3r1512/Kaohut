import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";

function CopyToClipboard(pin: string) {
  navigator.clipboard.writeText(pin);
}

export default function Pin({ pin }: { pin: string }) {
  const [copied, setCopied] = useState<boolean>(false);

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

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {copied ? (
                <ClipboardCheck className="text-green-500" />
              ) : (
                <Clipboard
                  onClick={() => {
                    CopyToClipboard(pin);
                    setCopied(true);
                  }}
                  className="text-black"
                />
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>{copied ? "Copied" : "Copy"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
