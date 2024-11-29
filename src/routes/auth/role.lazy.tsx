import RolePickerContainer from "@/components/RolePicker";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/auth/role")({
  component: Role,
});

function Role() {
  return <RolePickerContainer />;
}
