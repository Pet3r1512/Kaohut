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
  }, []);

  return (
    <Page>
      <Hero />
    </Page>
  );
}
