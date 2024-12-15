import { render, screen } from "@testing-library/react";
import { vi, it, expect, describe } from "vitest";
import RoleCard from "./RoleCard";
import { GraduationCap } from "lucide-react";

vi.mock("@tanstack/react-router", () => ({
  Link: ({
    to,
    children,
    className,
    ...props
  }: {
    to: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <a href={to} className={className} {...props}>
      {children}
    </a>
  ),
}));

const mockData = {
  id: "teacher",
  title: "Teacher",
  color: "bg-red-500",
  bgColor: "bg-[#AB0018]",
  titleHoverBg: "lg:group-hover:bg-[#AB0018]",
  icon: <GraduationCap className="lg:size-10" />,
  href: "/auth/teacher",
};

describe("Role Card Component Tests", () => {
  it("rendered correctly in DOM", async () => {
    render(<RoleCard props={mockData} />);

    const RoleCardComponent = screen.getByTestId("card");

    expect(RoleCardComponent).toBeInTheDocument();
  });

  it("should match snapshot", async () => {
    const component = render(<RoleCard props={mockData} />);

    expect(component).toMatchSnapshot();
  });
});
