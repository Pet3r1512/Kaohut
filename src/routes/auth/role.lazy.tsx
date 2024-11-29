import Page from "@/components/Layout/Page";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/auth/role")({
  component: Role,
});

function Role() {
  return <Page>This is Role Picker Page</Page>;
}
