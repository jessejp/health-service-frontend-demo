import type { Meta, StoryObj } from "@storybook/react";

import InfoCard from "../components/ui/InfoCard";

import Icon from "../public/icon/phone-black.svg";

const meta: Meta<typeof InfoCard> = {
  component: InfoCard,
  argTypes: {
    variant: {
      options: ["dark", "light"],
      control: { type: "radio" },
    },
    heading: {
      control: { type: "text" },
    },
    body: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InfoCard>;

export const InfoCardComponent: Story = {
  args: {
    variant: "dark",
    heading: "Info Card Heading",
    body: "Short body text",
  },
  render: ({ variant, heading, body }) => (
    <InfoCard
      variant={variant}
      iconPath={Icon}
      alt="icon"
      heading={heading}
      body={body}
    />
  ),
};
