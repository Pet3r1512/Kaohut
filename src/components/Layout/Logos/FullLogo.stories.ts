import type { Meta, StoryObj } from "@storybook/react";
import FullLogo from "./FullLogo";

const meta: Meta<typeof FullLogo> = {
  component: FullLogo,
};

export default meta;

type Story = StoryObj<typeof FullLogo>;

export const Primary: Story = {
  args: {},
};
