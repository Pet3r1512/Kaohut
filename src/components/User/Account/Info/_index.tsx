import { Label } from "@/components/aceternity/Label";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/stores/user";
import { useTranslation } from "react-i18next";

export default function AccountInfo() {
  const { getUser } = useUserStore();
  const { t } = useTranslation();

  const currUser = getUser();

  return (
    <div className="flex flex-col gap-y-5">
      <div className="w-full">
        <Label className="text-lg">{t("dashboard.account.name")}</Label>
        <Input
          disabled
          value={currUser?.name || ""}
          className="lg:w-1/2 text-lg font-semibold"
        />
      </div>
      <div className="w-full">
        <Label className="text-lg">{t("dashboard.account.email")}</Label>
        <Input
          disabled
          value={currUser?.email || ""}
          className="lg:w-1/2 text-lg font-semibold"
        />
      </div>
      <div className="lg:w-1/2 flex items-center gap-x-5">
        <div className="lg:w-1/2">
          <Label className="text-lg">{t("dashboard.account.role")}</Label>
          <Input
            disabled
            value={currUser?.role || ""}
            className="text-lg font-semibold"
          />
        </div>
        <div className="lg:w-1/2">
          <Label className="text-lg">{t("dashboard.account.workplace")}</Label>
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
