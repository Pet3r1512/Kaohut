import { describe, it } from "vitest";
import HighlightedTitle from "./HighlightedTitle";
import { render, screen } from "@testing-library/react";

describe("Highlighted Title tests", () => {
  it("should renders correctly in DOM", async () => {
    render(<HighlightedTitle />);
    expect(screen.getByTestId("highlighted_title")).toBeInTheDocument();
  });

  it("should has correct Kaohut word", () => {
    render(<HighlightedTitle />);

    const kaohut = screen.getByText("Kaohut!");
    expect(kaohut).toBeInTheDocument();
  });

  it("should has correct styles", () => {
    render(<HighlightedTitle />);
    const component = screen.getByTestId("highlighted_title");

    const textColor = getComputedStyle(component).fontWeight;
    expect(textColor).toBe("bold");
  });

  it("should matches snapshot", () => {
    render(<HighlightedTitle />);
    expect(screen.getAllByTestId("highlighted_title")).toMatchSnapshot();
  });
});
