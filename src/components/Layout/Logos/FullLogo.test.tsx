import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import FullLogo from "./FullLogo";

describe("Logo Test", () => {
  it("should render Logo correctly", () => {
    const Logo = render(<FullLogo />);

    const LogoText = Logo.getByText("Kaohut!");
    expect(LogoText).toBeInTheDocument();

    const LogoImage = Logo.getByAltText("Kaohut Full Logo");
    expect(LogoImage).toBeInTheDocument();
  });
  it("should match snapshot", () => {
    const Logo = render(<FullLogo />);

    expect(Logo).toMatchSnapshot();
  });
});
