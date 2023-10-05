import type { Meta, StoryObj } from "@storybook/react";
import Card from "../components/ui/Card";
import TextCardIcon from "../public/icon/checkmark-brand-blue.svg";
import ButtonCardIcon from "../public/icon/calendar-brand-blue.svg";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Text: Story = {
  args: {
    alt: "icon",
    heading: "Card Heading",
    children: "Body text is passed to the component as children",
  },
  parameters: {
    controls: {
      exclude: ["iconPath", "variant"],
    },
  },
  render: (args) => <Card {...args} iconPath={TextCardIcon} variant="text" />,
};

export const WithButton: Story = {
  args: {
    alt: "icon",
    heading: "Card Heading",
    children: "Body text is passed to the component as children",
  },
  parameters: {
    controls: {
      exclude: ["iconPath", "variant"],
    },
  },
  render: (args) => (
    <Card {...args} iconPath={ButtonCardIcon} variant="withButton" />
  ),
};
