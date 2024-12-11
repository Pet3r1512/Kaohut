import { it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SigninForm } from "./SigninForm";
import { userEvent } from "@storybook/testing-library";

it("should rendered correctly in DOM", () => {
  render(<SigninForm />);

  const SignInFormCompponent = screen.getByTestId("signin-form");

  expect(SignInFormCompponent).toBeInTheDocument();
});

it("should match snapshot", () => {
  const component = render(<SigninForm />);

  expect(component).toMatchSnapshot();
});

it("should render email field", () => {
  render(<SigninForm />);

  const emailLabel = screen.getByLabelText("Email Address");
  const emailInput = screen.getByPlaceholderText("youremailaddress@gmail.com");

  expect(emailLabel).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

it("should render password fields", async () => {
  render(<SigninForm />);

  const passwordLabel = screen.getByLabelText("Password");
  const passwordInput = screen.getAllByLabelText(/password/i);

  expect(passwordLabel).toBeInTheDocument();

  await userEvent.type(passwordInput[0], "mypassword");
  expect(passwordInput[0]).toHaveValue("mypassword");
});
