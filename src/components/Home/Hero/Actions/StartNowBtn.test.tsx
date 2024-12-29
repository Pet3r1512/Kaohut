import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { userEvent } from "@storybook/testing-library";
import StartNowBtn from "./StartNowBtn";

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

vi.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

describe("Start Now button", () => {
  it("should rendered in DOM", async () => {
    render(<StartNowBtn />);
    expect(screen.getByTestId("startnow")).toBeInTheDocument();
  });

  it("should have the correct background color on hover", async () => {
    render(<StartNowBtn />);
    const user = userEvent.setup();
    await screen.findByTestId("startnow");

    const exploreButton = screen.getByTestId("startnow");

    waitFor(async () => {
      expect(getComputedStyle(exploreButton).backgroundColor).toBe(
        "rgb(163, 55, 87)",
      );
      await user.hover(exploreButton);
      expect(getComputedStyle(exploreButton).backgroundColor).toBe(
        "rgb(220, 88, 109)",
      );
    });
  });

  it("should match snapshot", () => {
    render(<StartNowBtn />);
    expect(screen.findByTestId("startnow")).toMatchSnapshot();
  });
});
