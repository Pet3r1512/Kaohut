export const SERVER_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:9999/api/auth/"
    : "https://blonde-michell-pet3r-22028f0a.koyeb.app/api/auth/";

export const CLIENT_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173"
    : "https://kaohut.pages.dev"

export const CALLBACK_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173/dashboard/play"
    : "https://kaohut.pages.dev/dashboard/play";

export const QUERY_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:9999/trpc"
    : "https://blonde-michell-pet3r-22028f0a.koyeb.app/trpc"
