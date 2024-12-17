import { render, screen, waitFor } from "@testing-library/react";
import ExploreBtn from "./ExploreBtn"; // Path to your component
import { vi } from "vitest";
import { userEvent } from "@storybook/testing-library";

// Mock useTranslation to avoid locale issues
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

describe("ExploreBtn", () => {
  it("should rendered in DOM", async () => {
    render(<ExploreBtn />);
    expect(screen.getByTestId("explore-btn")).toBeInTheDocument();
  });

  it("should have the correct background color on hover", async () => {
    render(<ExploreBtn />);
    const user = userEvent.setup();
    await screen.findByTestId("explore-btn");

    const exploreButton = screen.getByTestId("explore-btn");

    waitFor(async () => {
      await user.hover(exploreButton);
      expect(getComputedStyle(exploreButton).backgroundColor).toBe(
        "rgb(163, 55, 87)",
      );
    });
  });

  it("should match snapshot", () => {
    render(<ExploreBtn />);
    expect(screen.findByTestId("explore-btn")).toMatchSnapshot();
  });
});
