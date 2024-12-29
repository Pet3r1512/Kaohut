import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Actions from "./Actions";
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

vi.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

describe("Action Buttons component tests", () => {
  it("should renders correctly in DOM", () => {
    render(<Actions />);
    expect(screen.getByTestId("actions-btns")).toBeInTheDocument();
  });

  it("should contains 2 buttons", () => {
    render(<Actions />);

    const startBtn = screen.getByTestId("startnow");
    expect(startBtn).toBeInTheDocument();

    const exploreBtn = screen.getByTestId("explore-btn");
    expect(exploreBtn).toBeInTheDocument();
  });

  it("should matches its snapshot", () => {
    render(<Actions />);

    expect(screen.getAllByTestId("actions-btns")).toMatchSnapshot();
  });
});
