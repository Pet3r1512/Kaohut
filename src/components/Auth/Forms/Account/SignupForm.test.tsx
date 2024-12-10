import { render, screen } from "@testing-library/react";
import { it } from "vitest";
import { SignupForm } from "./SignupForm";

it("should rendered correctly in DOM", () => {
  render(<SignupForm />);

  const SignUpFormComponent = screen.getByTestId("signup-form");

  expect(SignUpFormComponent).toBeInTheDocument();
});

it("should render first name and last name fields", () => {
  render(<SignupForm />);

  const firstnameLabel = screen.getByLabelText("First Name");
  const firstnameInput = screen.getByPlaceholderText("John");

  expect(firstnameLabel).toBeInTheDocument();
  expect(firstnameInput).toBeInTheDocument();

  const lastnameLabel = screen.getByLabelText("Last Name");
  const lastnameInput = screen.getByPlaceholderText("Dean");

  expect(lastnameLabel).toBeInTheDocument();
  expect(lastnameInput).toBeInTheDocument();
});

it("should render email field", () => {
  render(<SignupForm />);

  const emailLabel = screen.getByLabelText("Email Address");
  const emailInput = screen.getByPlaceholderText("youremailaddress@gmail.com");

  expect(emailLabel).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

it("should render password and confirm password fields", async () => {
  render(<SignupForm />);

  const passwordLabel = screen.getByLabelText("Password");
  //   const passwordInput = screen.getAllByLabelText(/password/i);

  expect(passwordLabel).toBeInTheDocument();

  //   await userEvent.type(passwordInput[0], "mysecurepassword");
  //   expect(passwordInput[0]).toHaveValue("mysecurepassword");

  const confirmPasswordLabel = screen.getByLabelText("Confirm Password");

  expect(confirmPasswordLabel).toBeInTheDocument();
});

it("should match snapshot", () => {
  const component = render(<SignupForm />);

  expect(component).toMatchSnapshot();
});
