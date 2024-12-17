import { within } from "@storybook/testing-library";
import HighlightedTitle from "./HighlightedTitle";
import { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";

const meta: Meta<typeof HighlightedTitle> = {
  component: HighlightedTitle,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByTestId("highlighted_title");
    expect(title).toBeInTheDocument();
  },
};
