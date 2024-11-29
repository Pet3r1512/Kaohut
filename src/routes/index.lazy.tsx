import Hero from "@/components/Home/Hero";
import Page from "@/components/Layout/Page";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Page className="flex flex-col items-center justify-center">
      <Hero />
    </Page>
  );
}
