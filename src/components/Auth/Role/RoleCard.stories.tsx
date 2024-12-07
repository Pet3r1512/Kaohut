import { Meta, StoryObj } from "@storybook/react";
import RoleCard from "./RoleCard";
import { GraduationCap, User } from "lucide-react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof RoleCard> = {
  component: RoleCard,
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    props: {
      id: "teacher",
      title: "Teacher",
      color: "bg-red-500",
      bgColor: "bg-[#AB0018]",
      titleHoverBg: "lg:group-hover:bg-[#AB0018]",
      icon: <GraduationCap className="lg:size-10" />,
    },
  },
};

export const HoverAndChangeBackgroundColor: Story = {
  args: {
    props: {
      id: "teacher",
      title: "Teacher",
      color: "bg-red-500",
      bgColor: "bg-[#AB0018]",
      titleHoverBg: "lg:group-hover:bg-[#AB0018]",
      icon: <GraduationCap className="lg:size-10" />,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId("card-header");

    await userEvent.hover(card);

    expect(card).toHaveClass("bg-red-500");
  },
};

export const HoverAndScaleUp: Story = {
  args: {
    props: {
      id: "student",
      title: "Student",
      color: "bg-yellow-500",
      bgColor: "bg-[#C97900]",
      titleHoverBg: "lg:group-hover:bg-[#C97900]",
      icon: <User className="lg:size-10" />,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId("card");

    await userEvent.hover(card);

    expect(card).toHaveClass("lg:hover:scale-105");
  },
};
