import type { Meta, StoryObj } from "@storybook/react";

import GuideStep from "../components/ui/GuideStep";

import Icon from "../public/icon/checkmark-white.svg";

const meta: Meta<typeof GuideStep> = {
  component: GuideStep,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof GuideStep>;

export const Default: Story = {
  args: {
    iconPath: Icon,
    alt: "icon",
    heading: "0. Guide Step Heading",
    children: "Body text is passed to the component as children.",
  },
  render: ({ iconPath, alt, heading, children }) => (
    <GuideStep iconPath={iconPath} alt={alt} heading={heading}>
      {children}
    </GuideStep>
  ),
};
