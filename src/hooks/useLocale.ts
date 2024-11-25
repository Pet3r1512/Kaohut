import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const locales = [
  {
    locale: "vi",
    text: "Tiếng Việt",
  },
  {
    locale: "en",
    text: "English",
  },
];

export const useLocale = () => {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const [currLocale, setLocale] = useState(locale || defaultLocale);
  const [cookies, setCookies] = useCookies(["NEXT_LOCALE"]);

  useEffect(() => {
    const storedLocale = cookies.NEXT_LOCALE;
    if (storedLocale && storedLocale !== currLocale) {
      setLocale(storedLocale);
      router.push(router.pathname, router.asPath, { locale: storedLocale });
    }
  }, [cookies, currLocale, router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    setCookies("NEXT_LOCALE", newLocale, { path: "/" });
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return currLocale === "vi"
    ? { ...locales[0], changeLocale }
    : { ...locales[1], changeLocale };
};
