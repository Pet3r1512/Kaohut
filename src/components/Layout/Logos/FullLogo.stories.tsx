import type { Meta, StoryObj } from "@storybook/react";

import FullLogo from "./FullLogo";

const meta = {
  component: FullLogo,
} satisfies Meta<typeof FullLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hidden: Story = {
  args: {
    className: "hidden",
  },
};
