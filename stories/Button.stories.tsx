import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/ui/Button";

import ButtonIcon from "../public/icon/calendar-white.svg";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  argTypes: {
    variant: {
      options: ["primary", "outline"],
      control: { type: "radio" },
    },
  },
  args: {
    variant: "primary",
  },
  render: ({ variant }) => <Button variant={variant} />,
};

export const WithIcon: Story = {
  render: () => <Button variant="primary" iconPath={ButtonIcon} />,
};
