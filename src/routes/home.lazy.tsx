import Hero from "@/components/Home/Hero";
import Page from "@/components/Layout/Page";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/home")({
  component: Index,
});

function Index() {
  return (
    <Page>
      <Hero />
    </Page>
  );
}
