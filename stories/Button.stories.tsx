import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button";

import ButtonIcon from "../public/icon/calendar-white.svg";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button variant="primary" />,
};

export const PrimaryWithIcon: Story = {
  render: () => <Button iconPath={ButtonIcon} />,
};

export const Secondary: Story = {
  render: () => <Button variant="outline"  />,
};
