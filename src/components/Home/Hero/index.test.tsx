import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Hero from ".";
import { vi } from "vitest";

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

describe("Hero section tests", () => {
  it("should be rendered in DOM", () => {
    render(<Hero />);
    expect(screen.getByTestId("hero")).toBeInTheDocument();
  });

  it("should renders illustrate", () => {
    render(<Hero />);

    const image = screen.getByTestId("hero-img");
    expect(image).toBeInTheDocument();
  });

  it("should matches its snapshot", () => {
    render(<Hero />);

    expect(screen.getAllByTestId("hero")).toMatchSnapshot();
  });
});
