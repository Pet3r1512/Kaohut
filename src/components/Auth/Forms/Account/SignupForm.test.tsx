import { render, screen } from "@testing-library/react";
import { it } from "vitest";
import { SignupForm } from "./SignupForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { userEvent } from "@storybook/testing-library";
import { vi } from "vitest";

const queryClient = new QueryClient();

vi.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

it("should rendered correctly in DOM", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <SignupForm />
    </QueryClientProvider>,
  );

  const SignUpFormComponent = screen.getByTestId("signup-form");

  expect(SignUpFormComponent).toBeInTheDocument();
});

it("should render first name and last name fields", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <SignupForm />
    </QueryClientProvider>,
  );

  const firstnameLabel = screen.getByTestId("First Name");
  const firstnameInput = screen.getByPlaceholderText("John");

  expect(firstnameLabel).toBeInTheDocument();
  expect(firstnameInput).toBeInTheDocument();

  const lastnameLabel = screen.getByTestId("Last Name");
  const lastnameInput = screen.getByPlaceholderText("Dean");

  expect(lastnameLabel).toBeInTheDocument();
  expect(lastnameInput).toBeInTheDocument();
});

it("should render email field", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <SignupForm />
    </QueryClientProvider>,
  );

  const emailLabel = screen.getByTestId("Email Address");
  const emailInput = screen.getByPlaceholderText("youremailaddress@gmail.com");

  expect(emailLabel).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

it("should render password and confirm password fields", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <SignupForm />
    </QueryClientProvider>,
  );

  const passwordLabel = screen.getByTestId("Password");
  const passwordInput = screen.getAllByLabelText(/password/i);

  expect(passwordLabel).toBeInTheDocument();

  await userEvent.type(passwordInput[0], "mysecurepassword");
  expect(passwordInput[0]).toHaveValue("mysecurepassword");

  const confirmPasswordLabel = screen.getByTestId("Confirm Password");

  expect(confirmPasswordLabel).toBeInTheDocument();
});

it("should match snapshot", () => {
  const component = render(
    <QueryClientProvider client={queryClient}>
      <SignupForm />
    </QueryClientProvider>,
  );

  expect(component).toMatchSnapshot();
});
