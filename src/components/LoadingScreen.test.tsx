import { it } from "vitest";
import LoadingScreen from "./LoadingScreen";
import { render, screen } from "@testing-library/react";

it("should ender correctly in the DOM", () => {
  render(<LoadingScreen />);

  const component = screen.getByTestId("LoadingScreen");

  expect(component).toBeInTheDocument();
});

it("should render email field", () => {
  render(<LoadingScreen />);

  const component = screen.getByTestId("LoadingScreen");

  expect(component).toMatchSnapshot();
});
