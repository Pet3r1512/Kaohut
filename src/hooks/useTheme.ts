/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

export const useTheme = () => {
  const [theme, setTheme] = useState<string | null>(null);

  const cookies = new Cookies(null, { path: "/" })

  useEffect(() => {
    const savedTheme = cookies.get("theme") || "light"
    setTheme(savedTheme);

    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    cookies.set("theme", newTheme, { maxAge: 31536000 })
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return { theme, toggleTheme };
};
