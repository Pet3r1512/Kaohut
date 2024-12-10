import { render, screen } from "@testing-library/react";
import RoleCard from "./RoleCard";
import { GraduationCap } from "lucide-react";

const mockData = {
  id: "teacher",
  title: "Teacher",
  color: "bg-red-500",
  bgColor: "bg-[#AB0018]",
  titleHoverBg: "lg:group-hover:bg-[#AB0018]",
  icon: <GraduationCap className="lg:size-10" />,
  href: "/auth/teacher",
};

it("rendered correctly in DOM", async () => {
  render(<RoleCard props={mockData} />);

  const RoleCardComponent = screen.getByTestId("card");

  expect(RoleCardComponent).toBeInTheDocument();
});

it("should match snapshot", async () => {
  const component = render(<RoleCard props={mockData} />);

  expect(component).toMatchSnapshot();
});
