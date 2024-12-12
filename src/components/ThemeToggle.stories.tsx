import { Meta, StoryObj } from "@storybook/react";
import ThemeToggle from "./ThemeToggle";
import { cleanup, within } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof ThemeToggle> = {
  component: ThemeToggle,
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    expect(canvasElement).toBeInTheDocument();
  },
};

export const Click: Story = {
  play: async ({ canvasElement }) => {
    cleanup();
    const canvas = within(canvasElement);

    const body = canvasElement.ownerDocument.body;
    const backgroundColorBefore = window.getComputedStyle(body).backgroundColor;

    const button = canvas.getByTestId("theme-togger");
    await userEvent.click(button);
    const backgroundColorAfter = window.getComputedStyle(body).backgroundColor;
    const icon = button.textContent;

    if (backgroundColorBefore === "rgb(30, 30, 30)") {
      expect(backgroundColorAfter).toBe("rgb(233, 236, 239)");
      expect(icon).toBe("🌙");
    } else {
      expect(backgroundColorAfter).toBe("rgb(30, 30, 30)");
      expect(icon).toBe("☀️");
    }
    cleanup();
  },
};
