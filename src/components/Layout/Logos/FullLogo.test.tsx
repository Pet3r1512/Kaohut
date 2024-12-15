import { render, screen } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import FullLogo from "./FullLogo";

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

describe("FullLogo Component Tests", () => {
  it("should render the Logo correctly", () => {
    render(<FullLogo />);

    const logoText = screen.getByText("Kaohut!");
    expect(logoText).toBeInTheDocument();

    const logoImage = screen.getByAltText("Kaohut Full Logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<FullLogo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
