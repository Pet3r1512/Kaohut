import { it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SigninForm } from "./SigninForm";
import { userEvent } from "@storybook/testing-library";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

it("should render correctly in the DOM", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <SigninForm />
    </QueryClientProvider>,
  );

  const SignInFormComponent = screen.getByTestId("signin-form");

  expect(SignInFormComponent).toBeInTheDocument();
});

it("should match snapshot", () => {
  const component = render(
    <QueryClientProvider client={queryClient}>
      <SigninForm />
    </QueryClientProvider>,
  );

  expect(component).toMatchSnapshot();
});

it("should render email field", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <SigninForm />
    </QueryClientProvider>,
  );

  const emailLabel = screen.getByLabelText("Email Address");
  const emailInput = screen.getByPlaceholderText("youremailaddress@gmail.com");

  expect(emailLabel).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

it("should render password fields", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <SigninForm />
    </QueryClientProvider>,
  );

  const passwordLabel = screen.getByLabelText("Password");
  const passwordInput = screen.getAllByLabelText(/password/i);

  expect(passwordLabel).toBeInTheDocument();

  await userEvent.type(passwordInput[0], "mypassword");
  expect(passwordInput[0]).toHaveValue("mypassword");
});
