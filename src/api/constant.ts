export const SERVER_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:9999/api/auth"
    : "https://blonde-michell-pet3r-22028f0a.koyeb.app/api/auth";

export const CALLBACK_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173/user/dashboard"
    : "https://kaohut.pages.dev/user/dashboard";
