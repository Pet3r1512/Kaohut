import { CALLBACK_URL, QUERY_URL, SERVER_URL } from "@/api/constant";
import Hero from "@/components/Home/Hero";
import Page from "@/components/Layout/Page";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    localStorage.clear();
    console.log(SERVER_URL, QUERY_URL, CALLBACK_URL);
  }, []);

  return (
    <Page>
      <Hero />
    </Page>
  );
}
