import { useTranslation } from "react-i18next";
import AccountInfo from "./Info/_index";

export default function Account() {
  const { t } = useTranslation();

  return (
    <section className="!lg:max-w-1/2 w-full">
      <p className="text-3xl font-bold text-primary pb-12">
        {t("dashboard.account.title")}
      </p>
      <AccountInfo />
    </section>
  );
}
